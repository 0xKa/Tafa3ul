import { Button } from "@/components/ui/button";
import PostCard from "@/features/feed/components/PostCard";
import { Loader2 } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import type { Post } from "@/features/feed/types";

interface PostsListProps {
  posts: Post[];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

const PostsList = ({ posts, hasNextPage, isFetchingNextPage, fetchNextPage }: PostsListProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const loadMoreRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetchingNextPage) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage, fetchNextPage],
  );

  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-muted-foreground">No posts yet</h2>
        <p className="text-muted-foreground mt-2">Be the first to share something!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      {/* Infinite scroll trigger */}
      <div ref={loadMoreRef} className="py-4 flex justify-center">
        {isFetchingNextPage && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="size-4 animate-spin" />
            <span>Loading more...</span>
          </div>
        )}

        {!hasNextPage && posts.length > 0 && <p className="text-sm text-muted-foreground">You've reached the end</p>}
      </div>

      {hasNextPage && !isFetchingNextPage && (
        <div className="flex justify-center">
          <Button variant="outline" onClick={fetchNextPage}>
            Load more
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostsList;
