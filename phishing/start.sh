#!/bin/bash

# Start the iciciibank service
(cd /app/iciciibank && python main.py) &

# Start the infoman service
(cd /app/infoman && python -m http.server 4000) &

# Wait for any process to exit
wait -n

# Exit with status of the process that exited first
exit $?