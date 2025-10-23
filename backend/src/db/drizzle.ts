import { SQL } from "bun";
import { getDatabaseUrl } from "@utils/db";
import { drizzle } from "drizzle-orm/bun-sql";

const client = new SQL(getDatabaseUrl())

export const db = drizzle({ client, casing: "snake_case" })