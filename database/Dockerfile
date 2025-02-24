FROM mongo:latest

# Copy the custom entrypoint script into the container
COPY /database/mongo-entrypoint.sh /usr/local/bin/mongo-entrypoint.sh
COPY /database/mongod.conf /etc/mongod.conf

# Make the entrypoint script executable
RUN chmod +x /usr/local/bin/mongo-entrypoint.sh

# Set the entrypoint to the custom script
ENTRYPOINT ["/usr/local/bin/mongo-entrypoint.sh"]