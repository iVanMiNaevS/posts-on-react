import { useState } from "react";

export default function useFetching(callback) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    async function fetchPosts(...args) {
        try {
            await callback(...args);
        } catch (e) {
            setError(1);
        } finally {
            setLoading(false);
        }
    }

    return [fetchPosts, loading, error];
}
