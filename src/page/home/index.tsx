import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import Header from '@src/component/Header'

const HomePage: () => JSX.Element = () => {
  return (
    <>
      <Header />
      <Container sx={{ minHeight: '100vh' }}>
        <Outlet />
      </Container>
    </>
  )
}

export default HomePage
