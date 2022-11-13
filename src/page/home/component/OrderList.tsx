import React, { useEffect } from 'react'
import { Box, Button, List, ListItem, ListItemText } from '@mui/material'
import { useDispatch, useSelector } from '@src/store'
import http from '@src/http'
import { fetchOrders } from '@src/store/thunk'
import { useNavigate } from 'react-router-dom'

const OrderList: () => JSX.Element = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.data.orders)
  useEffect(() => {
    void dispatch(fetchOrders())
  })
  const handleDetailClick: (id: string) => void = (id) => {
    navigate(`/order-detail?id=${id}`)
  }
  const handleCancel: (id: string) => void = (id) => {
    void http.post(`/customers/1000000001/order/cancel?orderId=${id}`).then((ret) => {
      if (ret != null) {
        void dispatch(fetchOrders())
      }
    })
  }
  return (
    <Box>
      {orders.map((item) => (
        <List key={item.orderId} sx={{ marginTop: '3rem', border: '1px solid black' }}>
          <ListItem>
            <ListItemText sx={{ display: 'inline-block' }}>订单ID: {item.orderId}</ListItemText>
            <Button onClick={() => handleDetailClick(item.orderId)}>详情</Button>
            <Button onClick={() => handleCancel(item.orderId)} color="error" disabled={!item.canCancel}>取消</Button>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ display: 'inline-block' }}>车辆ID: {item.carId}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ display: 'inline-block' }}>预定开始时间: {item.bookStartTime}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ display: 'inline-block' }}>预定结束时间: {item.bookEndTime}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ display: 'inline-block' }}>实际开始时间: {item.actualStartTime ?? '暂未未开始'}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ display: 'inline-block' }}>实际结束时间: {item.actualEndTime ?? '暂未结束'}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ display: 'inline-block' }}>状态: {item.status}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ display: 'inline-block' }}>是否可取消: {item.canCancel ? '是' : '否'}</ListItemText>
          </ListItem>
        </List>
      ))}
    </Box>
  )
}

export default OrderList
