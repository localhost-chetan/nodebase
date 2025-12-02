import Groq from "groq-sdk";
import { getGroqAPIKey } from "@lib/api";
import { reviewGrader } from "@agents/reviewGrader";
import { toolCaller } from "@agents/toolCaller";

export const llm = new Groq({
    apiKey: getGroqAPIKey(),
})

// reviewGrader()
toolCaller()