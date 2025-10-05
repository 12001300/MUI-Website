import React from 'react'
import SideBar from './Components/SideBar'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'
import { Box, Container, Stack } from '@mui/material'
import Navbar from './Components/Navbar'

export default function App() {
  return (
    <Box >
      <Navbar />
      <Stack direction={"row" } spacing={2} justifyContent="center" >

      <SideBar />
      <Feed />
      <Rightbar />
      </Stack>
    </Box>
  )
}
