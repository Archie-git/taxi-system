import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { OrderDetail as OrderDetailType } from '@src/common/model'
import http from '@src/http'
import { List, ListItem, ListItemText, Typography } from '@mui/material'

const OrderDetail: () => JSX.Element = () => {
  const [params] = useSearchParams()
  const [order, setOrder] = useState<OrderDetailType>()
  useEffect(() => {
    if (params.get('id') != null) {
      const path = `/customers/1000000001/order/detail?orderId=${params.get('id') ?? ''}`
      void http.get(path).then((ret) => {
        setOrder(ret.data)
      })
    }
  }, [])
  return (order != null) ? (
    <List key={order.orderId} sx={{ marginTop: '3rem', border: '1px solid black' }}>
      <ListItem>
        <ListItemText sx={{ display: 'inline-block' }}>订单ID: {order.orderId}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText sx={{ display: 'inline-block' }}>车辆ID: {order.carId}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText sx={{ display: 'inline-block' }}>用户ID: {order.customerId}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText sx={{ display: 'inline-block' }}>预定开始时间: {order.bookStartTime}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText sx={{ display: 'inline-block' }}>预定结束时间: {order.bookEndTime}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText sx={{ display: 'inline-block' }}>实际开始时间: {order.actualStartTime ?? '暂未未开始'}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText sx={{ display: 'inline-block' }}>实际结束时间: {order.actualEndTime ?? '暂未结束'}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText sx={{ display: 'inline-block' }}>创建人: {order.createdBy}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText sx={{ display: 'inline-block' }}>创建时间: {order.createdAt}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText sx={{ display: 'inline-block' }}>更新人: {order.updatedBy ?? '暂未更新'}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText sx={{ display: 'inline-block' }}>更新时间: {order.updatedAt ?? '暂未更新'}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText sx={{ display: 'inline-block' }}>状态: {order.status}</ListItemText>
      </ListItem>
    </List>
  ) : (
    <Typography variant="h5" sx={{ marginTop: '3rem' }}>
      {`获取订单(ID:${JSON.stringify(params.get('id'))})信息失败`}
    </Typography>
  )
}

export default OrderDetail
