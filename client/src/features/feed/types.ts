export interface PostUser {
  id: string;
  username: string;
}

export interface PostLike {
  id: string;
  userId: string;
  user: PostUser | null;
  likedAt: string;
}

export interface PostComment {
  id: string;
  userId: string;
  content: string;
  user: PostUser | null;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  imageUrl: string | null;
  likesCount: number;
  commentsCount: number;
  likes: PostLike[];
  comments: PostComment[];
  user: PostUser | null;
  createdAt: string;
  updatedAt: string;
}

export interface PostsResponse {
  data: Post[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface CreatePostData {
  content: string;
  image?: File;
}
