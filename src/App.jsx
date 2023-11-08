import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Carlist from './components/carlist'
import { AppBar, Typography } from '@mui/material'
//import './App.css'

function App() {
 

  return (
    <>
    <AppBar position='sticky'>
      <Typography variant='h6'>
      Car Shop
      </Typography>
    </AppBar>
    <Carlist />
    </>
  )
}

export default App
