import { SQL } from "bun";
import * as schema from "@/db/schema/";
import { getDatabaseUrl } from "@utils/db";
import { drizzle } from "drizzle-orm/bun-sql";

const client = new SQL(getDatabaseUrl())

export const db: ReturnType<typeof drizzle> = drizzle({ client, schema, casing: "snake_case", logger: true });