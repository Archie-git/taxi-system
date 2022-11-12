import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions, Typography
} from '@mui/material'
import { Logout as IconLogout } from '@mui/icons-material'

const Header: () => JSX.Element = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const handleNavigate: (path: string) => void = (path) => {
    navigate(path)
  }
  const handleToggle: (value: boolean) => void = (value) => {
    setOpen(value)
  }
  const handleConfirm: () => void = () => {
    // todo.archie logout
  }
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container>
          <Grid item sx={{ flex: 1, paddingLeft: '20vw', display: 'flex', alignItems: 'center' }}>
            <Button variant="text" sx={{ color: 'white', marginRight: '2rem' }} onClick={() => handleNavigate('/main')}>
              <Typography variant="h6">首页</Typography>
            </Button>
            <Button variant="text" sx={{ color: 'white' }} onClick={() => handleNavigate('/order')}>
              <Typography variant="h6">订单</Typography>
            </Button>
          </Grid>
          <Grid item>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => handleToggle(true)}
              color="inherit"
            >
              <IconLogout />
            </IconButton>
            <Dialog
              open={open}
              onClose={() => handleToggle(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Log out your account ?
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description" sx={{ paddingRight: '5rem' }}>
                  The local cache and data of your account will be cleared.
                </DialogContentText>
              </DialogContent>
              <DialogActions sx={{ marginRight: '2rem' }}>
                <Button onClick={() => handleToggle(false)}>No</Button>
                <Button onClick={handleConfirm} sx={{ color: 'red' }} autoFocus>Confirm</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
