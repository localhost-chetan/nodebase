export const getBackendUrl = () => {
    const url = process.env.BACKEND_URL;

    if (!url) {
        throw new Error("BACKEND_URL is not defined in environment variables");
    }

    return url;
}