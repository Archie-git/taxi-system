import React, { useEffect, useState } from 'react'
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
  ListItemText
} from '@mui/material'

const MainPart: () => JSX.Element = () => {
  const [age, setAge] = useState('')
  const [result, setResult] = useState<any>([])

  useEffect(() => {
    setResult([
      { text: 'oneeeeee' },
      { text: 'oneeeeee' },
      { text: 'oneeeeee' },
      { text: 'oneeeeee' },
      { text: 'oneeeeee' }
    ])
  }, [])
  return (
    <Box sx={{ paddingTop: '3rem' }}>
      <Grid container spacing={2}>
        <Grid item flex="1">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item flex="1">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="contained" onClick={() => {}}>搜索</Button>
        </Grid>
      </Grid>
      <List>
        {result.map((item) => (
          <ListItem>
            <ListItemText>{item.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default MainPart
