import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomePage from '@src/page/home'
import TempPage from '@src/page/temp'

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/temp',
    element: <TempPage />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
])

export default AppRouter
