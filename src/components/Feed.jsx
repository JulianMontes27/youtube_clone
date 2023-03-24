import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Sidebar, Videos } from './'

const Feed = () => {
  return (
    <Stack sx={{flexDirection: { sx: 'column', md:'row' }}}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}>
        <Sidebar />

        <Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff'}}>
          Copyright 2023 Julian Montes
        </Typography>
      </Box>

      <Box sx={{p: 1, overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'white', mb: 2}}>
          New <span style={{ color: '#F31503'}}>Videos</span>
        </Typography>

        <Videos videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed
