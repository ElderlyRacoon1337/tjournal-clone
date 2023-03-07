import NewsElem from '@/components/NewsElem';
import PostComments from '@/components/PostComments';
import MainLayout from '@/layouts/MainLayout';
import { Api } from '@/utils/api';
import { PostItem } from '@/utils/api/types';
import { Box } from '@mui/material';
import { GetServerSideProps, NextPage } from 'next';

interface PostProps {
  post: PostItem;
}

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <MainLayout contentFullWidth>
      <NewsElem post={post} />
      <Box>
        <PostComments postId={post.id} />
      </Box>
    </MainLayout>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    // @ts-ignore
    const id: string = ctx.params.id;
    const post = await Api(ctx).post.getOne(id);
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
