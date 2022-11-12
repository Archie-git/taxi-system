import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomePage from '@src/page/home'
import LoginPage from '@src/page/login'
import MainPart from '@src/page/home/component/MainPart'
import OrderPart from '@src/page/home/component/OrderPart'

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
        path: '/order',
        element: <OrderPart />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
])

export default AppRouter
