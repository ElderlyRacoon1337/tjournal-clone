import ProfilePage from '@/components/ProfilePage';
import MainLayout from '@/layouts/MainLayout';
import { Api } from '@/utils/api';
import React from 'react';

const Profile = ({ user }: any) => {
  return (
    <MainLayout hideComments contentFullWidth>
      <ProfilePage user={user} />
    </MainLayout>
  );
};

export default Profile;

export const getServerSideProps = async (ctx: any) => {
  try {
    const id = ctx.params.id;
    const user = await Api().user.getUser(id);

    return {
      props: { user },
    };
  } catch (error) {
    console.warn(error);
    return {
      props: {},
    };
  }
};
