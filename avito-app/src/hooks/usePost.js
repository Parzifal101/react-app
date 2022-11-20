import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort === 'title' || sort === 'text') {
            return [...posts].sort((a, b) => {
                if (a[sort] && b[sort]) {
                    a[sort].localeCompare(b[sort])
                } else {
                    console.log('Нет описания');
                }
            })
        } else if (sort === 'score') {
            return [...posts].sort((a, b) => b[sort] - a[sort])
        } else if (sort === 'time') {
            return [...posts].sort((a, b) => b[sort] - a[sort])
        } else {
            return posts
        }
    }, [sort, posts])
    return sortedPosts
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
        // console.log(sortedPosts);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}