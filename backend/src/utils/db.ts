export const getDatabaseUrl = () => {
    const DATABASE_URL = process.env.DATABASE_URL;

    console.log("🚀 ------------------------------------------------------------🚀");
    console.log("🚀 ~ db.ts:4 ~ getDatabaseUrl ~ DATABASE_URL: ", DATABASE_URL);
    console.log("🚀 ------------------------------------------------------------🚀");

    if (!DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined in environment variables");
    }

    return DATABASE_URL;
}