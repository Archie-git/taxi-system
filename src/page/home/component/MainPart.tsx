import React, { ChangeEventHandler, useEffect, useState } from 'react'
import {
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  ListItemIcon,
  ListItemButton,
  Collapse, SelectChangeEvent
} from '@mui/material'
import { ExpandMore as IconOpen, ExpandLess as IconClose, StarBorder as IconStar } from '@mui/icons-material'
import { useDispatch, useSelector } from '@src/store'
import { fetchCities, fetchOrders, fetchStores } from '@src/store/thunk'
import http from '@src/http'

const DEFAULT_TIME = new Date().toLocaleString()
  .replace('/', '-')
  .replace('/', '-')
  .replace(' ', 'T')

const MainPart: () => JSX.Element = () => {
  const dispatch = useDispatch()
  const { cities, stores } = useSelector((state) => state.data)
  const [city, setCity] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [unfolds, setUnfolds] = useState<string[]>([])

  useEffect(() => {
    void dispatch(fetchCities())
  }, [])

  const handleCityChange: (event: SelectChangeEvent) => void = (e) => {
    setCity(e.target.value)
  }

  const handleStartTimeChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setStartTime(e.target.value)
  }

  const handleEndTimeChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setEndTime(e.target.value)
  }

  const handleStoreClick: (id: string) => void = (id) => {
    setUnfolds(unfolds.includes(id) ? unfolds.filter((item) => item !== id) : [...unfolds, id])
  }

  const handleSearch: () => void = () => {
    void dispatch(fetchStores({
      city,
      startTime,
      endTime
    }))
  }

  const handleCarSelect: (carId: string) => void = (carId) => {
    void http.post('/customers/1000000001/order/create', {
      carId,
      startTime,
      endTime
    }).then(() => {
      void dispatch(fetchOrders())
    })
  }
  return (
    <Box sx={{ paddingTop: '3rem' }}>
      <Grid container spacing={2}>
        <Grid item flex="1">
          <FormControl fullWidth>
            <InputLabel>City</InputLabel>
            <Select
              value={city}
              label="City"
              onChange={handleCityChange}
            >
              {cities.map((item) => (
                <MenuItem key={item} value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item flex="1">
          <TextField
            type="datetime-local"
            label="Start Time"
            defaultValue={DEFAULT_TIME}
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleStartTimeChange}
            fullWidth
          />
        </Grid>

        <Grid item flex="1">
          <TextField
            type="datetime-local"
            label="End Time"
            defaultValue={DEFAULT_TIME}
            InputLabelProps={{
              shrink: true
            }}
            onChange={handleEndTimeChange}
            fullWidth
          />
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="contained" disabled={city === ''} onClick={handleSearch}>搜索</Button>
        </Grid>
      </Grid>

      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {stores.map((item) => {
          const open = unfolds.includes(item.storeId)
          return (
            <Box key={item.storeId} style={{ border: '1px solid black', marginTop: '1rem' }}>
              <ListItemButton onClick={() => handleStoreClick(item.storeId)} sx={{ backgroundColor: '#dddddd !important' }}>
                <ListItemIcon>
                  <IconStar/>
                </ListItemIcon>
                <ListItemText primary={item.storeName} />
                {open ? <IconClose /> : <IconOpen />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.cars.map((item2) => {
                    return (
                      <ListItem key={item2.carId}>
                        <Box sx={{ width: '20rem' }}>
                          <ListItemText>{item2.type}</ListItemText>
                        </Box>
                        <ListItemText>{item2.currency} {item2.pricePerDay}</ListItemText>
                        <Button color="success" onClick={() => handleCarSelect(item2.carId)}>预订</Button>
                      </ListItem>
                    )
                  })}
                </List>
              </Collapse>
            </Box>
          )
        })}
      </List>

    </Box>
  )
}

export default MainPart
