import axios, { AxiosInstance } from 'axios';
import { CreateUserDto, LoginDto } from './types';

export const UserApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get('users');
    return data;
  },

  async register(dto: CreateUserDto) {
    const { data } = await instance.post('auth/register', dto);
    return data;
  },

  async login(dto: LoginDto) {
    const { data } = await instance.post('auth/login', dto);
    return data;
  },

  async getMe() {
    const { data } = await instance.get('users/me');
    return data;
  },

  async getUser(id: number) {
    const { data } = await instance.get(`users/${id}`);
    return data;
  },
});
