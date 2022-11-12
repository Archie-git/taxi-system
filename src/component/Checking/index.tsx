import React from 'react'
import { Container, Box, CircularProgress, Typography } from '@mui/material'

const Checking: () => JSX.Element = () => {
  return (
    <Container sx={style.container}>
      <Box sx={style.box}>
        <CircularProgress />
        <Typography variant="h4" sx={style.text}>Checking...</Typography>
      </Box>
    </Container>
  )
}

export default Checking

const style = {
  container: {
    height: '100vh',
    paddingTop: '30vh'
  },
  box: {
    display: 'flex',
    justifyContent: 'center'
  },
  text: {
    textIndent: '1rem'
  }
}
