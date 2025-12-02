export const getGroqAPIKey = () => {
    const GROQ_API_KEY = process.env.GROQ_API_KEY;

    if (!GROQ_API_KEY) {
        throw new Error("GROQ_API_KEY is not defined in environment variables");
    }
    return GROQ_API_KEY;
}


export const getTavilyAPIKey = () => {
    const TAVILY_API_KEY = process.env.TAVILY_API_KEY;

    if (!TAVILY_API_KEY) {
        throw new Error("TAVILY_API_KEY is not defined in environment variables");
    }
    return TAVILY_API_KEY;
}


