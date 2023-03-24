import React from 'react';
import { Paper, IconButton } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const SearchBar = () => {
  return (
    <Paper component={'form'}
      onSubmit={()=>{}}
      sx={{borderRadius: 20, border: '1px solid #e3e3e3', pl:2, boxShadow:'none', mr: {sm: 5} }}>
        <input type="text" className='search-bar' placeholder='Search...' value={''} onChange={()=>{console.log('change')}}/>

        <IconButton type='submit' sx={{ p:'10px', color:'red' }}>
          <SearchRoundedIcon/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar
