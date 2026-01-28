#!/bin/bash

# Health Samurai Website - Server Management Script
# Usage: ./server.sh [start|stop|restart|status|dev]

PORT=${PORT:-4444}
PID_FILE=".server.pid"
LOG_FILE=".server.log"

cd "$(dirname "$0")"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
  echo -e "${GREEN}[OK]${NC} $1"
}

print_error() {
  echo -e "${RED}[ERROR]${NC} $1"
}

print_warn() {
  echo -e "${YELLOW}[WARN]${NC} $1"
}

get_pid() {
  if [ -f "$PID_FILE" ]; then
    cat "$PID_FILE"
  fi
}

is_running() {
  local pid=$(get_pid)
  if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
    return 0
  fi
  return 1
}

kill_port() {
  lsof -ti:$PORT | xargs kill -9 2>/dev/null
}

do_stop() {
  if is_running; then
    local pid=$(get_pid)
    echo "Stopping server (PID: $pid)..."
    kill "$pid" 2>/dev/null
    sleep 1
    # Force kill if still running
    if kill -0 "$pid" 2>/dev/null; then
      kill -9 "$pid" 2>/dev/null
    fi
    rm -f "$PID_FILE"
    print_status "Server stopped"
  else
    print_warn "Server not running"
    rm -f "$PID_FILE"
    # Clean up any orphan process on the port
    kill_port
  fi
}

do_start() {
  local hot_reload=$1

  if is_running; then
    print_error "Server already running (PID: $(get_pid))"
    echo "Use './server.sh restart' to restart"
    exit 1
  fi

  # Clean up port
  kill_port

  echo "Starting server on port $PORT..."

  if [ "$hot_reload" = "true" ]; then
    PORT=$PORT nohup bun --hot run src/server.ts > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    sleep 1
    if is_running; then
      print_status "Server started with hot reload (PID: $(get_pid))"
    fi
  else
    PORT=$PORT nohup bun run src/server.ts > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    sleep 1
    if is_running; then
      print_status "Server started (PID: $(get_pid))"
    fi
  fi

  if is_running; then
    echo "URL: http://localhost:$PORT"
    echo "Logs: tail -f $LOG_FILE"
  else
    print_error "Failed to start server"
    echo "Check logs: cat $LOG_FILE"
    exit 1
  fi
}

do_status() {
  if is_running; then
    print_status "Server is running (PID: $(get_pid))"
    echo "URL: http://localhost:$PORT"
  else
    print_warn "Server is not running"
  fi
}

do_dev() {
  # Run in foreground with hot reload (for development)
  do_stop 2>/dev/null
  kill_port
  echo "Starting server in development mode (foreground, hot reload)..."
  echo "URL: http://localhost:$PORT"
  echo "Press Ctrl+C to stop"
  echo ""
  PORT=$PORT exec bun --hot run src/server.ts
}

do_logs() {
  if [ -f "$LOG_FILE" ]; then
    tail -f "$LOG_FILE"
  else
    print_error "No log file found"
  fi
}

show_help() {
  echo "Health Samurai Server Management"
  echo ""
  echo "Usage: ./server.sh <command>"
  echo ""
  echo "Commands:"
  echo "  start     Start server in background"
  echo "  start -h  Start server in background with hot reload"
  echo "  stop      Stop the server"
  echo "  restart   Restart the server"
  echo "  status    Show server status"
  echo "  dev       Run in foreground with hot reload (Ctrl+C to stop)"
  echo "  logs      Tail the server logs"
  echo ""
  echo "Environment:"
  echo "  PORT      Server port (default: 4444)"
  echo ""
  echo "Examples:"
  echo "  ./server.sh start        # Start in background"
  echo "  ./server.sh start -h     # Start with hot reload"
  echo "  ./server.sh dev          # Development mode (foreground)"
  echo "  PORT=3000 ./server.sh start  # Start on port 3000"
}

case "${1:-help}" in
  start)
    if [ "$2" = "-h" ] || [ "$2" = "--hot" ]; then
      do_start true
    else
      do_start false
    fi
    ;;
  stop)
    do_stop
    ;;
  restart)
    do_stop
    sleep 1
    if [ "$2" = "-h" ] || [ "$2" = "--hot" ]; then
      do_start true
    else
      do_start false
    fi
    ;;
  status)
    do_status
    ;;
  dev)
    do_dev
    ;;
  logs)
    do_logs
    ;;
  help|--help|-h)
    show_help
    ;;
  *)
    print_error "Unknown command: $1"
    echo ""
    show_help
    exit 1
    ;;
esac
