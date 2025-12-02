import { tavily } from "@tavily/core"
import { getTavilyAPIKey } from "@lib/api"

const tavilyClient = tavily({
    apiKey: getTavilyAPIKey()
})

export const webSearch = async ({ query }: { query: string }) => {
    console.log("Calling Web Search tool...")
    const response = await tavilyClient.search(query, { maxResults: 2 })
    return response
}