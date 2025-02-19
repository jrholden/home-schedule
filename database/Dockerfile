FROM mongo:latest

# Copy the custom entrypoint script into the container
COPY mongo-entrypoint.sh /usr/local/bin/mongo-entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /usr/local/bin/mongo-entrypoint.sh

# Set the entrypoint to the custom script
ENTRYPOINT ["/usr/local/bin/mongo-entrypoint.sh"]