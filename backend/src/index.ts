import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
    return c.text("Hello Nodebase!")
})

export default {
    fetch: app.fetch,
    port: 3001
}
