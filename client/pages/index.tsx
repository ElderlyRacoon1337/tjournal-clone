import Post from '@/components/Post';
import MainLayout from '@/layouts/MainLayout';
import { getMe, setUserData } from '@/redux/slices/user';
import { wrapper } from '@/redux/store';
import { UserApi } from '@/utils/api/axios';
import { parseCookies } from 'nookies';

export default function Home() {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async (ctx) => {

//   }
// );
