#!/bin/bash

# Health Samurai Website - Stop Script

PID_FILE=".server.pid"

cd "$(dirname "$0")"

if [ -f "$PID_FILE" ]; then
  PID=$(cat "$PID_FILE")
  if kill -0 "$PID" 2>/dev/null; then
    echo "Stopping server (PID: $PID)..."
    kill "$PID"
    rm "$PID_FILE"
    echo "Server stopped."
  else
    echo "Server not running (stale PID file)."
    rm "$PID_FILE"
  fi
else
  echo "No PID file found. Server may not be running."
  # Try to kill any process on port 4444
  lsof -ti:4444 | xargs kill -9 2>/dev/null && echo "Killed process on port 4444."
fi
