import { useMemo } from 'react';

export const useSorted = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [posts, sort]);

  return sortedPosts;
};

export const usePosts = (posts, sort, quary) => {
  const sortedPosts = useSorted(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(quary)
    );
  }, [quary, sortedPosts]);

  return sortedAndSearchedPosts;
};

export default usePosts;
