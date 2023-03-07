import { AxiosInstance } from 'axios';
import { CreatePostDto, PostItem } from './types';

export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<PostItem>('posts');
    return data;
  },

  async create(dto: CreatePostDto) {
    const { data } = await instance.post<CreatePostDto, { data: PostItem }>(
      'posts',
      dto
    );
    return data;
  },

  async getOne(id: string) {
    const { data } = await instance.get<PostItem>(`posts/${id}`);
    return data;
  },

  async updatePost(id: number, dto: CreatePostDto) {
    const { data } = await instance.patch(`posts/${id}`, dto);
    return data;
  },

  async searchPost(title: string) {
    const { data } = await instance.get(`posts/search?title=${title}`);
    return data.items;
  },
});
