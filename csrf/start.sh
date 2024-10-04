#!/bin/bash

# Start the bankease service
(cd /app/bankease && npm start) &

# Start the hiking service
(cd /app/hiking && npm start) &

# Start the twitter service
(cd /app/twitter && npx http-server -p 5000) &

# Wait for any process to exit
wait -n

# Exit with status of the process that exited first
exit $?