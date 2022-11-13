import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Typography,
  Badge
} from '@mui/material'
import {
  Menu as IconMenu,
  Home as IconHome,
  Logout as IconLogout,
  AccountCircle as IconAccount
} from '@mui/icons-material'
import { useSelector } from '@src/store'

const Header: () => JSX.Element = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const orderCount = useSelector((state) => state.data.orders.length)
  const [open, setOpen] = useState(false)
  const getTitle: () => string = () => {
    if (location.pathname.startsWith('/main')) {
      return '首页'
    } else if (location.pathname.startsWith('/order-list')) {
      return '订单列表'
    } else if (location.pathname.startsWith('/order-detail')) {
      return '订单详情'
    } else {
      return ''
    }
  }
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
        <IconButton size="large" color="inherit" sx={{ marginRight: 2 }}>
          <IconMenu />
        </IconButton>
        <Typography variant="h6" sx={{ flex: 1 }}>{getTitle()}</Typography>
        <IconButton
          size="large"
          color="inherit"
          onClick={() => handleNavigate('/main')}
        >
          <IconHome />
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
          onClick={() => handleNavigate('/order-list')}
        >
          <Badge badgeContent={orderCount} color="error">
            <IconAccount />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          color="inherit"
          sx={{ marginLeft: '5rem' }}
          onClick={() => handleToggle(true)}
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

      </Toolbar>
    </AppBar>
  )
}

export default Header
