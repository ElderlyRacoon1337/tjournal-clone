import RatingPage from '@/components/RatingPage';
import MainLayout from '@/layouts/MainLayout';
import { Api } from '@/utils/api';

const Rating = ({ users }: any) => {
  return (
    <MainLayout>
      <RatingPage users={users} />
    </MainLayout>
  );
};

export default Rating;

export const getServerSideProps = async () => {
  try {
    const users = await Api().user.getAll();
    return {
      props: { users },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
