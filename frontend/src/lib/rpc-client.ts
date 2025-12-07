import { hc } from "hono/client"
import { type AppType } from "@backend/server";
import { getBackendUrl } from "@utils/get-url";

export const client = hc<AppType>(getBackendUrl())