import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import photo1 from "../Assests/1660098618034.jpg"
import photo2 from "../Assests/2024-street-portraits-106.webp"
import photo3 from "../Assests/401ded3786303276fa546f74c4c12463.jpg"
import photo4 from "../Assests/Lauren-2020-03__0005.jpg"
import photo5 from "../Assests/jon-steinberg-28667-250x150.jpg"
import photo6 from "../Assests/people-headshot-nick-maslow-f21ef38676504bc89a091ec9a5c95e4b.jpg"
import photo7 from "../Assests/what-is-a-chief-people-officer-and-why-does-it-matter.webp"
import AvatarGroup from '@mui/material/AvatarGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar'
import React from 'react'

export default function Rightbar() {
  return (
    <Box  flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={5}>
      <Avatar alt="Remy Sharp" src={photo1} />
      <Avatar alt="Remy Sharp" src={photo2} />
      <Avatar alt="Remy Sharp" src={photo3} />
      <Avatar alt="Remy Sharp" src={photo4} />
      <Avatar alt="Remy Sharp" src={photo5} />
      <Avatar alt="Remy Sharp" src={photo6} />
      <Avatar alt="Remy Sharp" src={photo7} />
       </AvatarGroup>
       <Typography variant='h6' fontWeight={100} mt={2} mb={2}> 
        Latest Photos
       </Typography>
       <ImageList cols={3} rowHeight={100} gap={5}>
        <ImageListItem>
          <img src={photo6} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={photo5} alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src={photo7} alt="" />
        </ImageListItem>
       </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}> 
        Latest Conversations
       </Typography>
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={photo4} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={photo3} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}
