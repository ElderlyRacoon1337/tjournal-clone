import { AxiosInstance } from 'axios';
import { CommentItem, CreateCommentDto, CreatePostDto } from './types';

export const CommentApi = (instance: AxiosInstance) => ({
  async getAll(postId?: number) {
    if (postId) {
      const { data } = await instance.get<CommentItem>(
        `comments?postId=${postId}`
      );
      return data;
    } else {
      const { data } = await instance.get<CommentItem>(`comments`);
      return data;
    }
  },

  async create(postId: number, text: string) {
    const { data } = await instance.post<
      CreateCommentDto,
      { data: CommentItem }
    >('comments', { postId, text });
    return data;
  },

  async remove(commentId: number) {
    await instance.delete(`comments/${commentId}`);
  },
});
