import React, { useState } from 'react'
import UtilKeycloak from '@src/util/keycloak'
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions
} from '@mui/material'
import { Logout as IconLogout } from '@mui/icons-material'
import Logo from '@src/asset/img/welab_logo.png'

const Header: () => JSX.Element = () => {
  const [open, setOpen] = useState(false)
  const handleOpen: () => void = () => {
    setOpen(true)
  }
  const handleClose: () => void = () => {
    setOpen(false)
  }
  const handleConfirm: () => void = () => {
    void UtilKeycloak.logout()
  }
  return (
    <AppBar color="default" position="sticky" sx={style.container}>
      <Toolbar>
        <Grid container>
          <Grid item sx={style.main}>
            <img src={Logo} style={style.logo} draggable="false" alt="logo" />
            <Typography variant="h6" sx={style.text}>Payroll System</Typography>
          </Grid>
          <Grid item>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              color="inherit"
            >
              <IconLogout />
            </IconButton>
            <Dialog
              open={open}
              onClose={handleClose}
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
                <Button onClick={handleClose}>No</Button>
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

const style = {
  container: {
    backgroundColor: 'white'
  },
  main: {
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    width: '3rem',
    height: '2.5rem',
    margin: '0 2rem 0 1rem'
  },
  text: {
    color: '#3f469a',
    userSelect: 'none'
  }
}
