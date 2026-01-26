import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useAuthStore } from "@/features/auth/authStore";
import ProfilePicture from "@/features/profile/components/ProfilePicture";
import { GetProfilePicUrl } from "@/lib/utils";
import { ImagePlus, Loader2, Plus, X } from "lucide-react";
import { useRef, useState, type ChangeEvent } from "react";
import { toast } from "sonner";
import { useCreatePost } from "../hooks/useCreatePost";

type CreatePostDialogProps = {
  triggerInMenu?: boolean;
};

const CreatePostDialog = ({ triggerInMenu = false }: CreatePostDialogProps) => {
  const { user } = useAuthStore();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { mutate: createPost, isPending } = useCreatePost();

  const profilePicUrl = GetProfilePicUrl(user!.id);

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Invalid image type. Please select a JPEG, PNG, WebP, or GIF image.");
      return;
    }

    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
    e.target.value = "";
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
      setImagePreview(null);
    }
  };

  const handleSubmit = () => {
    if (!content.trim() || isPending) return;

    createPost(
      {
        content: content.trim(),
        image: selectedImage ?? undefined,
      },
      {
        onSuccess: () => {
          setContent("");
          handleRemoveImage();
          setOpen(false);
          toast.success("Post created successfully!");
        },
      },
    );
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      setContent("");
      handleRemoveImage();
    }
    setOpen(isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>
        <Button className="gap-2 w-full justify-start" variant={triggerInMenu ? "ghost" : "default"} size="sm">
          <Plus className="size-4" />
          Create Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create a new post</DialogTitle>
          <DialogDescription>Share your thoughts with the community</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex gap-3">
            <ProfilePicture imgUrl={profilePicUrl} fullName={user!.username} size={10} />
            <Textarea
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 min-h-24 resize-none"
              disabled={isPending}
            />
          </div>

          {/* Image preview */}
          {imagePreview && (
            <div className="relative">
              <img src={imagePreview} alt="Preview" className="w-full max-h-64 object-cover rounded-lg" />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 size-8"
                onClick={handleRemoveImage}
              >
                <X className="size-4" />
              </Button>
            </div>
          )}
        </div>

        <DialogFooter className="flex">
          {/* Image upload button */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            onChange={handleImageSelect}
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            disabled={isPending}
            className="gap-2 mr-auto"
          >
            <ImagePlus className="size-4" />
            Add Image
          </Button>

          <Button variant="outline" onClick={() => handleClose(false)} disabled={isPending}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!content.trim() || isPending}>
            {isPending && <Loader2 className="size-4 mr-2 animate-spin" />}
            Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
