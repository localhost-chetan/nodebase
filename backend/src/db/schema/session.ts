import { user } from "@/db/schema/user";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const session = pgTable("session", {
    id: serial().primaryKey(),
    expiresAt: timestamp().notNull(),
    token: text().notNull().unique(),
    createdAt: timestamp()
        .$defaultFn(() => new Date())
        .notNull(),
    updatedAt: timestamp()
        .$onUpdate(() => new Date())
        .notNull(),
    ipAddress: text(),
    userAgent: text(),
    userId: text()
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
});