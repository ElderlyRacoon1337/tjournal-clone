import axios from 'axios';
import { CreateUserDto, LoginDto } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

export default instance;

export const UserApi = {
  async register(dto: CreateUserDto) {
    const { data } = await instance.post('auth/register', dto);
    return data;
  },

  async login(dto: LoginDto) {
    const { data } = await instance.post('auth/login', dto);
    return data;
  },

  async getMe(token: string) {
    const { data } = await instance.get('users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },
};