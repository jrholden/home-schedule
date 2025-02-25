FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY /server/package*.json ./
COPY /server/.env ./

# Install dependencies
RUN npm install --omit=dev

# Copy the rest of the application files
COPY /server/src/. .

# Load environment variables
ARG NODE_PORT
ENV PORT=${NODE_PORT}

# Expose the application port
EXPOSE ${PORT}

# Define the command to run the application
CMD ["sh", "-c", "sleep 5 && node app.js"]