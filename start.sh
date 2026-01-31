#!/bin/bash

# Health Samurai Website - Start Script
# Runs the server in background on port 4444

PORT=4444
PID_FILE=".server.pid"
LOG_FILE=".server.log"

cd "$(dirname "$0")"

# Check if already running
if [ -f "$PID_FILE" ]; then
  OLD_PID=$(cat "$PID_FILE")
  if kill -0 "$OLD_PID" 2>/dev/null; then
    echo "Server already running (PID: $OLD_PID)"
    echo "Use ./stop.sh to stop it first"
    exit 1
  else
    rm "$PID_FILE"
  fi
fi

# Kill any process on port 4444
lsof -ti:$PORT | xargs kill -9 2>/dev/null

# Start server in background with live reload
echo "Starting server on port $PORT..."
DEV=1 PORT=$PORT nohup bun --hot run src/server.ts > "$LOG_FILE" 2>&1 &
echo $! > "$PID_FILE"

sleep 1

if kill -0 $(cat "$PID_FILE") 2>/dev/null; then
  echo "Server started successfully (PID: $(cat $PID_FILE))"
  echo "URL: http://localhost:$PORT"
  echo "Logs: tail -f $LOG_FILE"
else
  echo "Failed to start server. Check $LOG_FILE for errors."
  exit 1
fi
