import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: text().primaryKey(),
    name: text().notNull(),
    email: text().notNull().unique(),
    emailVerified: boolean().default(false).notNull(),
    image: text(),
    createdAt: timestamp()
        .$defaultFn(() => new Date())
        .notNull(),
    updatedAt: timestamp()
        .$defaultFn(() => new Date())
        .$onUpdate(() => new Date())
        .notNull(),
});



