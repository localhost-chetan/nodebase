import Groq from "groq-sdk";
import { getGroqAPIKey } from "@lib/llm";

const llm = new Groq({
    apiKey: getGroqAPIKey(),
})


const main = async () => {
    const response = await llm.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
            {
                // Define the system role to set the behavior of the assistant
                role: "system",
                content: "You are Nodebase, a helpful assistant that helps people find information about Generative AI, RAG (Retrieval Augumented Generation), MCP Servers and AI agents and workflows..",
            },
            {
                role: "user",
                content: "Hi",
            }
        ]
    })

    console.log("🚀 ~ index.ts:20 ~ main ~ response: ", response.choices.at(0)?.message.content);
}

main()