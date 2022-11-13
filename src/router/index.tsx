import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomePage from '@src/page/home'
import MainPart from '@src/page/home/component/MainPart'
import OrderList from '@src/page/home/component/OrderList'
import OrderDetail from '@src/page/home/component/OrderDetail'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/main',
        element: <MainPart />
      },
      {
        path: '/order-list',
        element: <OrderList />
      },
      {
        path: '/order-detail',
        element: <OrderDetail />
      },
      {
        path: '/',
        element: <Navigate to="/main" />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/main" />
  }
])

export default AppRouter
