import { SQL } from "bun";
import * as schema from "@db/schema/index";
import { getDatabaseUrl } from "@utils/db";
import { drizzle } from "drizzle-orm/bun-sql";
import { EnhancedQueryLogger } from "drizzle-query-logger";

const client = new SQL(getDatabaseUrl())

export const db = drizzle({
    client, schema, casing: "snake_case", logger: new EnhancedQueryLogger({
        log: () => {
            const runtimeEnvrionment = process.env.NODE_ENV;

            if (runtimeEnvrionment !== "production") {
                return true;
            }

            return false;
        }
    })
});