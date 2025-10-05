import { Box } from '@mui/material'
import React from 'react'

export default function SideBar() {
  return (
    <Box 
      bgcolor={"lightgreen"} flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      SideBar
    </Box>
  )
}
