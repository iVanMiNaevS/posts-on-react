import { useMemo } from "react";
export function useSortedPost(sort, posts) {
    const sortedPosts = useMemo(() => {
        if (sort !== "Default value" && sort) {
            return [...posts].sort((a, b) => {
                return a[sort].localeCompare(b[sort]);
            });
        }
        return posts;
    }, [sort, posts]);
    return sortedPosts;
}

export function usePost(posts, sort, searchQuery) {
    const sortedPosts = useSortedPost(sort, posts);
    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter((post) => {
            return post.title.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }, [searchQuery, sortedPosts]);
    return sortedAndSearchPosts;
}
