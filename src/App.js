import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcone from '@mui/icons-material/Delete';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
export default function App() {
  const  Bluebutton=styled(Button)({
     backgroundColor:"skyblue",
  color:"#888",
  margin:5,
  "&:hover":{backgroundColor:"red"},
  "&:disabled":{backgroundColor:"black",color:"white"
  }})
  return (
    <div>
      <Button startIcon={<Add/>} variant="outlined" color='success'>Text</Button>
<Button variant="contained" color='secondary' startIcon={<DeleteIcone/>}>Contained</Button>
<Button variant="outlined" disabled>Outlined</Button>
<Typography variant='h6' component="p">
  it uses h1  style 
</Typography>
<Button variant='contained' disabled  sx={{
  backgroundColor:"skyblue",
  color:"#888",
  margin:5,
  "&:hover":{backgroundColor:"red"},
  "&:disabled":{backgroundColor:"grey",color:"white"}
}}> my button</Button>
<Bluebutton disabled
> unique button</Bluebutton>
    </div>
  )
}
