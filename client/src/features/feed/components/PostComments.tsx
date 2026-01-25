import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/features/auth/authStore";
import ProfilePicture from "@/features/profile/components/ProfilePicture";
import { GetProfilePicUrl } from "@/lib/utils";
import { paths } from "@/paths";
import { formatDistanceToNow } from "date-fns";
import { Send, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAddComment } from "../hooks/useAddComment";
import { useDeleteComment } from "../hooks/useDeleteComment";
import type { Post } from "../types";
import { toast } from "sonner";

interface PostCommentsProps {
  post: Post;
}

const PostComments = ({ post }: PostCommentsProps) => {
  const { user } = useAuthStore();
  if (!user) return null;
  if (!post) return null;

  const [newComment, setNewComment] = useState("");
  const { mutate: addComment, isPending: isAdding } = useAddComment();
  const { mutate: deleteComment, isPending: isDeleting } = useDeleteComment();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || isAdding) return;

    if (newComment.length > 1000) {
      toast.warning("Comment is too long. Maximum length is 1000 characters.");
      return;
    }

    addComment(
      { postId: post.id, content: newComment.trim() },
      {
        onSuccess: () => setNewComment(""),
      },
    );
  };

  const handleDeleteComment = (commentId: string) => {
    if (isDeleting) return;
    deleteComment({ postId: post.id, commentId });
  };

  return (
    <div className="w-full space-y-3 border-t pt-3">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          disabled={isAdding}
          className="flex-1"
        />
        <Button type="submit" size="icon" disabled={!newComment.trim() || isAdding}>
          <Send className="size-4" />
        </Button>
      </form>

      {/* comments list */}
      <div className="space-y-3">
        {post.comments.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-2">No comments yet, be the first to comment!</p>
        ) : (
          post.comments.map((comment) => {
            const isOwnComment = user.id === comment.userId;
            const username = comment.user?.username ?? "deleted_user";

            return (
              <div key={comment.id} className="flex gap-2 group">
                <Link to={paths.public.userProfile(username)}>
                  <ProfilePicture fullName={username} imgUrl={GetProfilePicUrl(comment.user?.id!)} size={8} />
                </Link>
                <div className="flex-1 bg-muted rounded-lg px-3 py-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Link to={paths.public.userProfile(username)} className="text-sm font-semibold hover:underline">
                        @{username}
                      </Link>
                      <span className="text-xs text-muted-foreground">
                        {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                      </span>
                    </div>
                    {isOwnComment && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-6 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleDeleteComment(comment.id)}
                        disabled={isDeleting}
                      >
                        <Trash2 className="size-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                  <p className="text-sm mt-0.5">{comment.content}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PostComments;
