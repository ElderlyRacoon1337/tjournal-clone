import Post from '@/components/Post';
import MainLayout from '@/layouts/MainLayout';
import { Api } from '@/utils/api';
import { PostItem } from '@/utils/api/types';
import { NextPage, NextPageContext } from 'next';

interface HomeProps {
  posts: PostItem[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <MainLayout>
      {posts?.map((post, i) => (
        <Post
          key={i}
          id={post.id}
          title={post.title}
          descriprion={post?.body[0]?.data?.text}
        />
      ))}
    </MainLayout>
  );
};

export default Home;

export const getServerSideProps = async (ctx: NextPageContext) => {
  try {
    const posts = await Api().post.getAll();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: null,
      },
    };
  }
};
