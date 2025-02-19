#!/bin/bash

# Change sysfs file setting
echo 0 > /sys/kernel/mm/transparent_hugepage/enabled

# Remove all files and directories inside /data/db
rm -rf /data/db/*

# Increase the number of open file descriptors
ulimit -n 64000

# Start MongoDB with authentication
exec /usr/local/bin/docker-entrypoint.sh mongod --auth