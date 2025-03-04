FROM node:23-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY /server/package*.json ./
COPY /server/tsconfig.json ./
COPY /server/.env ./

# Install dependencies
RUN npm install

# Copy the rest of the application files

COPY /server/src/. .
COPY /shared ./shared
RUN npx tsc
RUN cp -r ./dist/* ./shared
RUN rm -rf ./dist

# Load environment variables
ARG NODE_PORT
ENV PORT=${NODE_PORT}

# Expose the application port
EXPOSE ${PORT}

# Define the command to run the application
CMD ["sh", "-c", "sleep 1 && node app.js"]