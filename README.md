# Nodebase

Welcome to Nodebase! This project is a full-stack application with a separate backend and frontend.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Running the Database](#running-the-database)
- [Ports](#ports)

## Overview

This repository contains a full-stack application with a separate backend and frontend.

- **`backend`**: A server-side application built with Hono and Bun.
- **`frontend`**: A client-side application built with Next.js.

## Project Structure

```
/
├── backend/
│   ├── src/
│   └── ...
├── frontend/
│   ├── src/
│   └── ...
├── compose.yaml
└── README.md
```

## Tech Stack

### Backend

- **Framework**: [Hono](https://hono.dev/)
- **Runtime**: [Bun](https://bun.sh/)
- **Language**: TypeScript
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database**: PostgreSQL

### Frontend

- **Framework**: [Next.js](https://nextjs.org/)
- **Library**: [React](https://react.dev/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/) or [Podman](https://podman.io/)

### Backend

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
    bun run dev
    ```

The backend server will start on port `3002`.

### Frontend

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
    bun run dev
    ```

The frontend development server will start on port `3000`.

## Running the Database

This project uses Docker or Podman to run a PostgreSQL database in a container.

### 1. Create a `.env` file

The database configuration is loaded from a `.env` file in the `backend` directory. Create a file named `.env` in the `backend` directory and add the following content.

```env
POSTGRES_PORT=3001
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_strong_password
POSTGRES_DB=nodebase
```

**Note:** Replace `your_username` and `your_strong_password` with your desired credentials.

### 2. Start the Database

With Docker or Podman installed, you can start the PostgreSQL database with a single command from the root of the project. This command will read the `compose.yaml` file, pull the Postgres image, and start the container in the background.

```bash
# If you are using Docker
docker-compose up --detach --build

# If you are using Podman
podman-compose up --detach --build
```

The database will now be running and accessible on port `3001`.


## Ports

-   **Backend**: `3002`
-   **Frontend**: `3000`
-   **Database**: `3001`