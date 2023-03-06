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
  views: number;
  createdAt: string;
  updatedAt: string;
};
