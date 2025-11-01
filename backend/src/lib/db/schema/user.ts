import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
    id: serial().primaryKey(),
    fullName:varchar({length: 256}).notNull(),
    email: varchar({length: 256}).notNull().unique(),
    passwordHash: varchar({length: 512}).notNull(),
})