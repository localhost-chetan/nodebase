import { getDatabaseUrl } from "@utils/db";
import { drizzle } from "drizzle-orm/node-postgres"
import { migrate } from 'drizzle-orm/node-postgres/migrator';

const db = drizzle(getDatabaseUrl());

await migrate(db, { migrationsFolder: "./drizzle/migrations" });
