import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Welcome to Nodebase')
})

export default {
  fetch: app.fetch,
  port: process.env.PORT || 3001,
}
