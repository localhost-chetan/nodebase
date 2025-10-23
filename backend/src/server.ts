import { Hono } from 'hono'
import { db } from '@db/drizzle'

const app = new Hono()

app
    .get('/', (c) => {
        return c.text("Hello Nodebase!")
    })
    .get("db-check", async (c) => {
        const result = await db.execute(`SELECT current_database()`);
        return c.json(result);
    })

export default {
    fetch: app.fetch,
    port: 3001
}
