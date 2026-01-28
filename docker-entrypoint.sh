#!/bin/bash
set -e

APP_DIR="/app/repo"
SERVER_PID=""

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

clone_or_pull() {
    if [ -z "$GIT_REPO" ]; then
        log "ERROR: GIT_REPO environment variable is required"
        exit 1
    fi

    if [ -d "$APP_DIR/.git" ]; then
        log "Repository exists, fetching updates..."
        cd "$APP_DIR"
        git fetch origin "$GIT_BRANCH"
        LOCAL=$(git rev-parse HEAD)
        REMOTE=$(git rev-parse "origin/$GIT_BRANCH")

        if [ "$LOCAL" != "$REMOTE" ]; then
            log "New changes detected, pulling..."
            git reset --hard "origin/$GIT_BRANCH"
            return 0  # Changes pulled
        fi
        return 1  # No changes
    else
        log "Cloning repository: $GIT_REPO (branch: $GIT_BRANCH)"
        git clone --branch "$GIT_BRANCH" --single-branch "$GIT_REPO" "$APP_DIR"
        return 0  # Fresh clone
    fi
}

write_version_info() {
    cd "$APP_DIR"
    COMMIT_HASH=$(git rev-parse --short HEAD)
    COMMIT_DATE=$(git log -1 --format=%ci)
    echo "{\"commit\":\"$COMMIT_HASH\",\"date\":\"$COMMIT_DATE\"}" > .version.json
    log "Version: $COMMIT_HASH ($COMMIT_DATE)"
}

install_deps() {
    cd "$APP_DIR"
    write_version_info
    if [ -f "package.json" ]; then
        log "Installing dependencies..."
        bun install
    fi
}

start_server() {
    cd "$APP_DIR"
    log "Starting server on port $PORT..."
    bun run src/server.ts &
    SERVER_PID=$!
    log "Server started with PID: $SERVER_PID"
}

stop_server() {
    if [ -n "$SERVER_PID" ] && kill -0 "$SERVER_PID" 2>/dev/null; then
        log "Stopping server (PID: $SERVER_PID)..."
        kill "$SERVER_PID" 2>/dev/null || true
        wait "$SERVER_PID" 2>/dev/null || true
        SERVER_PID=""
    fi
}

restart_server() {
    stop_server
    install_deps
    start_server
}

cleanup() {
    log "Shutting down..."
    stop_server
    exit 0
}

trap cleanup SIGTERM SIGINT

# Initial setup
clone_or_pull
install_deps
start_server

# Poll for changes
log "Starting git poll loop (interval: ${POLL_INTERVAL}s)"
while true; do
    sleep "$POLL_INTERVAL"

    # Check if server is still running
    if [ -n "$SERVER_PID" ] && ! kill -0 "$SERVER_PID" 2>/dev/null; then
        log "Server crashed, restarting..."
        start_server
        continue
    fi

    # Check for updates
    if clone_or_pull; then
        log "Changes detected, restarting server..."
        restart_server
    fi
done
