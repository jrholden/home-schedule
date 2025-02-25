# Home Schedule
Another project to practice some skills. Maybe this one will be finished some day, maybe not
## Setup Instructions

### Environment Variables

Ensure you have the following environment variables set up in your `.env` files.

#### Docker Compose + Mongo Environment Variables (`.env`)

Create a `.env` file in the `project root` directory with something like:

[Database]
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=adminpassword
MONGO_CONTAINER_PORT=9196
MONGO_PORT=28018
[Nodejs]
NODE_CONTAINER_PORT=9195
NODE_PORT=3001
[React]
REACT_CONTAINER_PORT=9194
REACT_PORT=3000
[Config]
GLIBC_TUNABLES=glibc.pthread.rseq=0

#### Server Environment Variables (`server/.env`)

Create a `.env` file in the `server` directory with something like:

[Server]
PORT=3001
[Database]
DATABASE_URI='mongodb://admin:adminpassword@mongo:28018/home_schedule?serverSelectionTimeoutMS=2000&authSource=admin'
#DATABASE_URI='mongodb://admin:adminpassword@localhost:9196/home_schedule?serverSelectionTimeoutMS=2000&authSource=admin'
[Config]
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000

#### Client Environment Variables (`client/.env.local`)

Create a `.env.local` file in the `client` directory with something like:

[Backend]
NEXT_PUBLIC_API_URL=http://localhost:9195
#NEXT_PUBLIC_API_URL=http://localhost:3001 


### Running the API and MongoDB with Docker Compose

1. Navigate to the project root directory.

    ```bash
    cd /path/to/home-schedule
    ```

2. Run Docker Compose to start the API and MongoDB services.

    ```bash
    docker-compose up
    ```

    Or start them seperate.
    ```bash
    docker compose up node --build
    docker compose up mongo --build
    ```
    This will start the API on port `9195` and MongoDB on port `28018`.

### Setting Up the Client

1. Navigate to the [client](http://_vscodecontentref_/0) directory.

    ```bash
    cd client
    ```

2. Install the dependencies.

    ```bash
    npm install
    ```

3. Run the development server.

    ```bash
    npm run dev
    ```

    The client should now be running on `http://localhost:3000`.

### Summary

- Ensure environment variables are set up in [.env](http://_vscodecontentref_/1) files.
- Use Docker Compose to start the API and MongoDB services.
- Set up the client by installing dependencies and running the development server.

### Planned
- Full Docker compose solution including client and nginx for centralized endpoint
- Create the home schedule app

Enjoy managing your home schedule efficiently (eventually)!
