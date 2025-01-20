
# Portfolio Project

This project uses Docker to set up a PostgreSQL database, backend, and frontend services. The backend connects to the PostgreSQL database, and the frontend communicates with the backend API.

## Prerequisites

- Docker and Docker Compose installed on your machine.
- Node.js and npm installed (for backend and frontend development).

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the repository

Clone the repository to your local machine.

```bash
git clone https://github.com/alshoja/carbon-portfolio-generator
cd carbon-portfolio-generator
```


### 2. Create an .env file from .env.example

Create a .env file at the root of your project directory with the following environment variables:

```bash
DB_HOST=postgres_db
DB_PORT=5432
DB_NAME=credit_portfolio
DB_USER=portfolio@db
DB_PASSWORD=portfolio@123
NODE_ENV=development
PORT=5000

POSTGRESQL_PORT=5432
POSTGRESQL_USERNAME=portfolio@db
POSTGRESQL_DATABASE=credit_portfolio
POSTGRESQL_PASSWORD=portfolio@123

VITE_API_URL=http://localhost:5000/api/
```
### 3.  Start the Docker containers

Run the following command to start all services using Docker Compose:

```bash
docker-compose up --build
```
This will start the PostgreSQL database, backend, and frontend services in containers. The database will be available on the port specified in your .env file (POSTGRESQL_PORT).

### 4.  Access the services

- **Frontend**: Once the containers are up, you can access the frontend at [http://localhost:3000](http://localhost:3000).
- **Backend**: The backend will be accessible at [http://localhost:5000](http://localhost:5000).
- **PostgreSQL**: The PostgreSQL database can be accessed at `localhost:<POSTGRESQL_PORT>` using the credentials defined in your `.env` file.

The database will be initialized with the data given in the url [Full-stack Code Challenge - Portfolio Generation](https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/tech/fullstack-code-challenge/Full-stack+Code+Challenge-+Portfolio+generation.pdf)


### 5. Running in Development Mode

If you want to run the frontend or backend in development mode, you can use the following commands in the respective directories:
#Frontend and Backend 
```bash
cd fe
npm install
npm run dev

cd be
npm install
npm run start:dev
```
### 5. Stopping the services

To stop the Docker containers, run the following command:
```bash
docker-compose down
```

### 5. If your Database is up but fe and be services failed ?

You can use the make file inside, run the following command (don`t forget to make .env in root folders (be and fe) if you are using this ):
```bash
make run 
```
