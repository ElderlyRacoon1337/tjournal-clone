import { OutputData } from '@editorjs/editorjs';

export type CreateUserDto = {
  fullName: string;
  email: string;
  password: string;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type CreatePostDto = {
  title: string;
  body: OutputData['blocks'];
};

export type PostItem = {
  title: string;
  body: OutputData['blocks'];
  tags?: string;
  id: number;
  user: any;
  views: number;
  createdat: string;
  updatedat: string;
};

export type CreateCommentDto = {
  postId: number;
  text: string;
};

export type CommentItem = {
  id: number;
  text: string;
  user: any;
  post: any;
  createdatt: string;
  updatedAt: string;
};
