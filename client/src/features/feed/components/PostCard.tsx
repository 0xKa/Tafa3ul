import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/features/auth/authStore";
import ProfilePicture from "@/features/profile/components/ProfilePicture";
import { GetPostImageUrl, GetProfilePicUrl } from "@/lib/utils";
import { paths } from "@/paths";
import { formatDistanceToNow } from "date-fns";
import { MoreHorizontal, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDeletePost } from "../hooks/useDeletePost";
import type { Post } from "../types";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const { user } = useAuthStore();

  const { mutate: deletePost, isPending: isDeleting } = useDeletePost();

  const isOwnPost = user?.id === post.userId;

  useEffect(() => {
    console.log(post.imageUrl);
  });

  const handleDelete = () => {
    if (isDeleting) return;
    deletePost(post.id);
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Link to={paths.public.userProfile(post.user?.username ?? "")}>
              <ProfilePicture fullName={post.user!.username!} imgUrl={GetProfilePicUrl(post.userId)} size={10} />
            </Link>
            <div>
              <Link to={paths.public.userProfile(post.user?.username ?? "")} className="font-semibold hover:underline">
                @{post.user?.username ?? "Unknown"}
              </Link>
              <p className="text-xs text-muted-foreground mb-2">
                {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
              </p>
            </div>
          </div>

          {isOwnPost && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreHorizontal className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="text-destructive focus:text-destructive"
                >
                  <Trash2 className="size-4 mr-2" />
                  Delete post
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <p className="whitespace-pre-wrap">{post.content}</p>
        {post.imageUrl && (
          <div className="mt-3 rounded-lg overflow-hidden">
            <img
              src={GetPostImageUrl(post.imageUrl)}
              alt="Post image"
              className="w-full max-h-96 object-contain bg-muted"
              loading="lazy"
            />
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col gap-3 pt-0"></CardFooter>
    </Card>
  );
};

export default PostCard;
