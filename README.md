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