import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SxProps } from '@mui/system'
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse, Theme, Box } from '@mui/material'
import { ExpandLess as IconOpen, ExpandMore as IconClose } from '@mui/icons-material'
import { MenuItem, MenuData, MenuItemChild } from '@src/component/NavMenu/data'

const NavMenu: () => JSX.Element = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(-1)
  const [focus, setFocus] = useState('')

  useEffect(() => {
    navigate('/')
    setFocus('/')
  }, [])

  const handleItemClick: (item: MenuItem, index: number) => void = (item, index) => {
    if (item.path != null) {
      setOpen(-1)
      setFocus(item.path)
      navigate(item.path)
    } else {
      setOpen(index)
      setFocus('')
    }
  }

  const handleChildClick: (item: MenuItemChild) => void = (item) => {
    setFocus(item.path)
    navigate(item.path)
  }

  const getTitleStyle: (path: string) => SxProps<Theme> = (path) => ({
    color: focus === path ? 'blue' : 'black',
    position: 'relative',
    top: '0.1rem'
  })

  return (
    <Box sx={style.container}>
      <Box sx={{ position: 'fixed', width: '20rem' }}>
        <List
          sx={style.list}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {MenuData.map((item1, index1) => {
            return item1.children == null ? (
              <ListItemButton alignItems='center' key={item1.title} onClick={() => handleItemClick(item1, index1)}>
                <ListItemIcon>
                  {item1.icon}
                </ListItemIcon>
                <ListItemText primary={item1.title} sx={getTitleStyle(item1.path ?? '')} />
              </ListItemButton>
            ) : (
              <React.Fragment key={item1.title}>
                <ListItemButton onClick={() => handleItemClick(item1, index1)}>
                  <ListItemIcon>
                    {item1.icon}
                  </ListItemIcon>
                  <ListItemText primary={item1.title} sx={{ position: 'relative', top: '0.1rem' }} />
                  {index1 === open ? <IconOpen /> : <IconClose />}
                </ListItemButton>
                <Collapse in={index1 === open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item1.children.map((item2) => {
                      return (
                        <ListItemButton key={item2.title} onClick={() => handleChildClick(item2)}>
                          <ListItemIcon >
                            {item2.icon}
                          </ListItemIcon>
                          <ListItemText primary={item2.title} sx={getTitleStyle(item2.path ?? '')} />
                        </ListItemButton>
                      )
                    })}
                  </List>
                </Collapse>
              </React.Fragment>
            )
          })}
        </List>
      </Box>
    </Box>
  )
}

export default NavMenu

const style = {
  container: {
    width: '20rem',
    height: '100vh'
  },
  list: {
    maxWidth: 360,
    marginTop: '3rem',
    backgroundColor: '#ffffff'
  }
}
