import Groq from "groq-sdk";
import { getGroqAPIKey } from "@lib/llm";
import z from "zod";

const llm = new Groq({
    apiKey: getGroqAPIKey(),
})


const outputSchema = z.object({
    sentiment: z.enum(["Positive", "Negative", "Neutral"]),
    confidence: z.number().min(0.0).max(1.0),
})


const main = async () => {
    const response = await llm.chat.completions.create({
        temperature: 0.2,
        // stop: "RAG",    // Stop generation when the model outputs "RAG"
        max_completion_tokens: 100,
        model: "llama-3.1-8b-instant",
        frequency_penalty: 1.5,
        response_format: {
            type: "json_object",
        },
        messages: [
            {
                // Define the system role to set the behavior of the assistant
                role: "system",
                content: `You are Nodebase, a smart review grader. Your task is to grade user reviews and return the sentiment as Positive, Negative, or Neutral.
                
                You must return the response as valid JSON structured as follows:
                {
                    "sentiment": "Positive" | "Negative" | "Neutral",
                    "confidence": float (0.0 - 1.0)
                }`,
            },
            {
                role: "user",
                content: `I purchased this 3-in-1 trimmer and have been using it for the past 15 days. In my experience, the design is sleek and comfortable to hold, and the blades deliver a clean, precise trim every time. The Type-C fast charging is very convenient, and the battery backup of around 120 minutes easily lasts for several grooming sessions.
                The package came with multiple blades, comb attachments, a cleaning brush, and oil, making it very easy to maintain. Over the last two weeks of use, grooming has become much quicker and simpler for me. Overall, I am satisfied with how well this trimmer performs, and I find it reliable and good value at this price. Based on my personal use, I would definitely recommend it to others who want a hassle-free grooming tool.`,
            }
        ]
    })

    const content = response.choices.at(0)?.message.content as string

    console.log("🚀 ~ index.ts:48 ~ main ~ content: ", content);
    console.log(JSON.parse(content));


    const validatedOutput = outputSchema.parse(JSON.parse(content));

    console.log("🚀 ~ index.ts:53 ~ main ~ validatedOutput: ", validatedOutput);


    // console.log("🚀 ~ index.ts:20 ~ main ~ response: ", response);

    // const getModels = await llm.models.list()

    // console.log("🚀 ~ index.ts:34 ~ main ~ getModels: ", getModels.data.find((obj) => obj.id === response.model));

}

main()