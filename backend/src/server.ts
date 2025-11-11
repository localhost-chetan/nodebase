import { Hono } from 'hono'
import { db } from '@db/index'

const app = new Hono()

app
  .get('/', (c) => {
    return c.text('Welcome to Nodebase')
  })
  .get("/db-check", async (c) => {
    const currentDatabase = await db.execute("SELECT current_database()")

    console.log("🚀 ------------------------------------------------------🚀");
    console.log("🚀 ~ server.ts:13 ~ currentDatabase: ", currentDatabase);
    console.log("🚀 ------------------------------------------------------🚀");

    return c.json({ status: "Database connected", currentDatabase: (currentDatabase as any).at(0).current_database })
  })

export default {
  fetch: app.fetch,
  port: process.env.PORT || 3002,
}
