import { getDatabaseUrl } from "@utils/db"
import { defineConfig } from "drizzle-kit"

export default defineConfig({
    schema: "./src/db/schema/index.ts",
    out: "./drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: getDatabaseUrl()
    },
    
    strict: true,
    verbose: true,
})