import { llm } from "@/index";
import { webSearch } from "@utils/web-search";
import { type ChatCompletionMessageParam } from "groq-sdk/resources/chat.mjs";


const messages: ChatCompletionMessageParam[] = [
    {
        role: "system", content: `
                ROLE => You're an helpful assistant called Nodebase who have access to the web search tool if you don't have the data.

                You've access to following tools:
                1: webSearch: Search the internet for latest and real time information.
                    Use the webSearch tool to find new and real-time information on the internet to answer user queries.

        Today's date is ${new Date().toDateString()}. Answer as accurately as possible.`
    },
    // {
    //     role: "user",
    //     // content: "What is today's date?"
    //     content: "When was iPhone 16 launched?"
    // }

]

const askQuery = () => {
    const query = prompt("\nWhat you want to know about? => ")
    if (!query) {
        askQuery()
    }
    return query
}

export const toolCaller = async () => {
    while (true) {

        const query = askQuery()
        messages.push({
            role: "user",
            content: String(query)
        })

        const toolCaller = await llm.chat.completions.create({
            model: "meta-llama/llama-4-maverick-17b-128e-instruct",
            temperature: 0.25,
            response_format: {
                type: "text"
            },
            max_completion_tokens: 200,
            messages,
            tools: [
                {
                    type: "function",
                    function: {
                        name: "webSearch",
                        description: "Search the internet for new and real time information.",
                        parameters: {
                            type: "object",
                            properties: {
                                query: {
                                    type: "string",
                                    description: "The search query string."
                                },
                            },
                            required: ["query"]
                        }
                    }
                }
            ],
            tool_choice: "auto",
        })

        console.log("🚀 ~ toolCaller.ts:54 ~ toolCaller ~ toolCaller: ", toolCaller.choices);



        // console.log("🚀 ~ index.ts:102 ~ main ~ toolCaller: ", JSON.stringify(toolCaller.choices.at(0)?.message, null, 3));
        // messages.push(toolCaller.choices.at(0)?.message)

        const toolCalls = toolCaller.choices.at(0)?.message.tool_calls;
        if (!toolCalls) {
            console.log(`Assistant: ${toolCaller.choices.at(0)?.message.content}`);
            askQuery()
            return
        }

        for (const tool of toolCalls) {
            // console.log("🚀 ~ index.ts:113 ~ main ~ tool: ", tool);
            const functionName = tool.function.name
            const functionArgs = tool.function.arguments

            console.log("🚀 ~ toolCaller.ts:69 ~ toolCaller ~ functionArgs: ", functionArgs);



            if (functionName === "webSearch") {
                const toolResult = await webSearch(JSON.parse(functionArgs));

                // console.log("🚀 ~ toolCaller.ts:81 ~ toolCaller ~ toolResult: ", toolResult);

                // console.log("🚀 ~ index.ts:119 ~ main ~ toolResult: ", toolResult.results.map((result) => result.content).join("\n\n"));

                messages.push({
                    role: "tool",
                    tool_call_id: tool.id,
                    // name: tool.function.name,
                    content: toolResult.results.map((result) => result.content).join(" ")
                });
            }

            // 4. Send results back and get final response
            const finalOutput = await llm.chat.completions.create({
                model: "llama-3.1-8b-instant",
                messages,
            });


            console.log("🚀 ~ toolCaller.ts:99 ~ toolCaller ~ finalOutput: ", finalOutput.choices.at(0)?.message.content);

        }

        askQuery()
    }
}
