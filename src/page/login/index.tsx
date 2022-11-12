import React from 'react'
import { Container, Box, TextField, List, ListItem, Button, Typography } from '@mui/material'

const LoginPage: () => JSX.Element = () => {
  return (
    <Container>
      <Box sx={{ width: '30rem', margin: '15vh auto 0' }}>
        <List>
          <ListItem sx={{ marginBottom: '2rem' }}>
            <Typography variant="h4">用户登录</Typography>
          </ListItem>
          <ListItem>
            <TextField variant="outlined" label="用户名" fullWidth />
          </ListItem>
          <ListItem>
            <TextField variant="outlined" label="密码" fullWidth />
          </ListItem>
          <ListItem sx={{ marginTop: '2rem' }}>
            <Button variant="contained" fullWidth onClick={() => {}}>确认</Button>
          </ListItem>
        </List>
      </Box>
    </Container>
  )
}

export default LoginPage
