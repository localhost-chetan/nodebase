import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const verification = pgTable("verification", {
    id: serial().primaryKey(),
    identifier: text().notNull(),
    value: text().notNull(),
    expiresAt: timestamp().notNull(),
    createdAt: timestamp()
        .$defaultFn(() => new Date())
        .notNull(),
    updatedAt: timestamp()
        .$defaultFn(() => new Date())
        .$onUpdate(() => new Date())
        .notNull(),
});
