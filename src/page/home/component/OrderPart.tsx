import React, { useEffect, useState } from 'react'
import { Box, ListItem, ListItemText } from '@mui/material'

const OrderPart: () => JSX.Element = () => {
  const [order, setOrder] = useState<any>([])
  useEffect(() => {
    setOrder([
      { text: 'oneeeeee' },
      { text: 'oneeeeee' },
      { text: 'oneeeeee' },
      { text: 'oneeeeee' },
      { text: 'oneeeeee' }
    ])
  }, [])
  return (
    <Box>
      {order.map((item) => (
        <ListItem>
          <ListItemText>{item.text}</ListItemText>
        </ListItem>
      ))}
    </Box>
  )
}

export default OrderPart
