import Groq from "groq-sdk";
import { getGroqAPIKey } from "@lib/llm";

const llm = new Groq({
    apiKey: getGroqAPIKey(),
})


const main = async () => {
    const response = await llm.chat.completions.create({
        temperature: 0.8,
        stop: "RAG",    // Stop generation when the model outputs "RAG"
        max_completion_tokens: 100,
        model: "llama-3.1-8b-instant",
        frequency_penalty: 1.5,
        messages: [
            {
                // Define the system role to set the behavior of the assistant
                role: "system",
                content: "You are Nodebase, a helpful assistant that helps people find information about Generative AI, RAG (Retrieval Augumented Generation), MCP Servers and AI agents and workflows..",
            },
            {
                role: "user",
                content: "Hello",
            }
        ]
    })

    console.log("🚀 ~ index.ts:20 ~ main ~ response: ", response.choices.at(0)?.message.content);
    // console.log("🚀 ~ index.ts:20 ~ main ~ response: ", response);
}

main()