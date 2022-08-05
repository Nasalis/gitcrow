import { ApolloClient, InMemoryCache } from "@apollo/client";
import { token } from "../utils/token";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL_GITHUB,
    headers: {
        'Authorization': `Bearer ${token}`
    },
    cache: new InMemoryCache()
}); 