import { pgTable, text, timestamp, boolean, uuid } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
    id: uuid().primaryKey().defaultRandom(),
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


export const account = pgTable("account", {
    id: uuid().primaryKey(),
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



export const session = pgTable("session", {
    id: uuid().primaryKey().defaultRandom(),
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

export const verification = pgTable("verification", {
    id: uuid().primaryKey().defaultRandom(),
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
