import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';

export default function BasicAvatars() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Avatar alt="Beau Sharp" src="assets/Dogs/dogs3.jpg"/>
      <Avatar alt="Austin Sharp" src="assets/Dogs/dogs1.jpg"/>
      <Avatar alt="Thuy Sharp" src="assets/Dogs/dogs7.jpg" />
      <Avatar alt="Kevin Sharp" src="assets/Dogs/dogs2.jpg" />
    </Box>
  );
}