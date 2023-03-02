import ProfilePage from '@/components/ProfilePage';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';

const Profile = () => {
  return (
    <MainLayout hideComments contentFullWidth>
      <ProfilePage />
    </MainLayout>
  );
};

export default Profile;
