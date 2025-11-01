# Nodebase

Welcome to Nodebase! This project is a full-stack application with a separate backend and frontend.

## Overview

This repository contains two main directories: `backend` and `frontend`.

- **`backend`**: A server-side application built with Hono and Bun.
- **`frontend`**: A client-side application built with Next.js.

## Backend

The backend is a lightweight and fast server built with Hono, a web framework for Cloudflare Workers, Bun, and Deno.

### Tech Stack

- **Framework**: [Hono](https://hono.dev/)
- **Runtime**: [Bun](https://bun.sh/)
- **Language**: TypeScript
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)

### Getting Started

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    bun install
    ```
3.  **Start the development server:**
    ```bash
    bun run dev or bun dev
    ```

The backend server will start on port `3001`.

## Frontend

The frontend is a modern web application built with Next.js, a popular React framework.

### Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Library**: [React](https://react.dev/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

### Getting Started

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    bun install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    or
    ```bash
    bun run dev
    ```

The frontend development server will start on port `3000`.



## Ports



-   **Backend**: `3001`

-   **Frontend**: `3000`



## Running the Database with Docker/Podman



This project uses Docker or Podman to run a PostgreSQL database in a container. This is the easiest way to get a database running for local development.



### 1. Create a `.env` file



The database configuration is loaded from a `.env` file in the root of the project. Create a file named `.env` and add the following content.



```env

POSTGRES_USER=your_username

POSTGRES_PASSWORD=your_strong_password

POSTGRES_DB=nodebase

```



**Note:** Replace `your_username` and `your_strong_password` with your desired credentials.



### 2. Start the Database



With Docker or Podman installed, you can start the PostgreSQL database with a single command from the root of the project. This command will read the `docker-compose.yaml` file, pull the Postgres image, and start the container in the background.



```bash

# If you are using Docker

docker-compose up --detach



# If you are using Podman

podman-compose up --detach

```



The database will now be running and accessible on port `5432`.
