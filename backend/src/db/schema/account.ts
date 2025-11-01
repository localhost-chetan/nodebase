import { user } from "@/db/schema/user";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const account = pgTable("account", {
    id: serial().primaryKey(),
    accountId: text().notNull(),
    providerId: text().notNull(),
    userId: text()
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    accessToken: text(),
    refreshToken: text(),
    idToken: text(),
    accessTokenExpiresAt: timestamp(),
    refreshTokenExpiresAt: timestamp(),
    scope: text(),
    password: text(),
    createdAt: timestamp()
        .$defaultFn(() => new Date())
        .notNull(),
    updatedAt: timestamp()
        .$onUpdate(() => new Date())
        .notNull(),
});

