import { DateRange, Delete, EmojiEmotions, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import photo from "../Assests/normal.jpg"
import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import React from 'react'

import styled from '@emotion/styled';

export default function Add() {
    const [open, setOpen] = React.useState(false);
    const StyledModal=styled(Modal)({
        display:"flex",
        alignItems:"center",
        justifyContent:"center" 
    })
    const UserBox=styled(Box)({
         display:"flex",
        alignItems:"center",
        marginBottom:"20px",
    })
  return (
    <>
    <Tooltip onClick={()=>setOpen(true)} title="add" sx={{position:"fixed", bottom:20, right:20,left:{xs:"calc(50% - 25px)", md:30}}}>
       <Fab color='primary' aria-label='add'>
        <AddIcon />
       </Fab>
    </Tooltip>
    <StyledModal 
  open={open}
  onClose={()=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5} >
   <Typography variant='h6' color="gray" textAlign="center" >Create post</Typography>
    <UserBox>
        <Avatar src={photo} sx={{width:30, height:30, mr:2}}/>
        <Typography fontWeight={500} variant='span'>John Doe</Typography>
    </UserBox>
       <TextField sx={{width:"100%"}}
          id="standard-multiline-static"
          
          multiline
          rows={3}
          placeholder="What's on your mind ?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary'/>
            <ImageIcon color='secondary'/>
            <VideoCameraBack color='success'/>
            <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
  <Button>post</Button>
  
  <Button sx={{width:"100px"}}><DateRange/></Button>
</ButtonGroup>
  </Box>
</StyledModal>
    
    </>
  )
}
