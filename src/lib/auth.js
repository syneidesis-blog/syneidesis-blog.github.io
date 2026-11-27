import { createAuthClient } from "better-auth/client";
import { usernameClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
    baseURL: "https://api.syneidesis.com.br",
    plugins: [
        usernameClient(),
    ],
});
