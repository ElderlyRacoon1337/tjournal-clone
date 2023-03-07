import { CommentApi } from './commentApi';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import { UserApi } from './userApi';
import Cookies, { parseCookies } from 'nookies';
import axios from 'axios';
import { PostApi } from './postApi';

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>;
  post: ReturnType<typeof PostApi>;
  comment: ReturnType<typeof CommentApi>;
};

export const Api = (
  ctx?: NextPageContext | GetServerSidePropsContext
): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies();
  const access_token = cookies.access_token;

  const instance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      Authorization: 'Bearer ' + access_token,
    },
  });

  return {
    user: UserApi(instance),
    post: PostApi(instance),
    comment: CommentApi(instance),
  };
};

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

export default instance;
