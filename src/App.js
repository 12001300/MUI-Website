import React from 'react'
import SideBar from './Components/SideBar'
import { useState } from 'react'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'
import { Box, Container, createTheme, Stack, ThemeProvider } from '@mui/material'
import Navbar from './Components/Navbar'
import Add from './Components/Add'
import styled from '@emotion/styled'

export default function App() {
  const [mode,setMode]=useState("light")
  const darkTheme=createTheme({
    palette:{

      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>

    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction={"row" } spacing={2} justifyContent="center" >

      <SideBar setMode={setMode} mode={mode} />
      <Feed />
      <Rightbar />
      </Stack>
      <Add />
    </Box>
    </ThemeProvider>
  )
}
