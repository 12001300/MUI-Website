import  Photo  from '../Assests/normal.jpg'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';  
import Post from './Post';

export default function Feed() {
  return (
    <Box  flex={4} p={2}>
        <Post sx={{ maxWidth: 345, mb:5 }}/>
        <Post sx={{ maxWidth: 345, mb:5 }}/>
        <Post sx={{ maxWidth: 345, mb:5 }}/>
        <Post sx={{ maxWidth: 345, mb:5 }}/>
    </Box>
  )
}
