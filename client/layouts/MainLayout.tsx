import LeftMenu from '@/components/LeftMenu';
import SideComments from '@/components/SideComments';
import { Box, Stack } from '@mui/material';
import React from 'react';

interface MainLayoutProps {
  children?: any;
  hideComments?: boolean;
  contentFullWidth?: boolean;
  hideMenu?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  hideMenu,
}) => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      sx={{ p: '20px' }}
    >
      {!hideMenu && (
        <Box>
          <LeftMenu />
        </Box>
      )}
      <Box
        maxWidth={contentFullWidth ? '900px' : '600px'}
        sx={{ flex: 1, m: '0 auto' }}
      >
        <Box px={'20px'}>{children}</Box>
      </Box>
      {!hideComments && (
        <Box>
          <SideComments />
        </Box>
      )}
    </Stack>
  );
};

export default MainLayout;
