import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import UtilKeycloak from '@src/util/keycloak'
import AppRouter from '@src/router'
import AppStore from '@src/store'
import Checking from '@src/component/Checking'
import './style.css'
import RootSibling from '@src/component/RootSibling'

const App: () => JSX.Element = () => {
  const [checking, setChecking] = useState(false)
  useEffect(() => {
    void UtilKeycloak.init((authenticated, token) => {
      if (authenticated) {
        setChecking(false)
      }
    })
  }, [])
  return checking ? (
    <Checking />
  ) : (
    <Provider store={AppStore}>
      <RouterProvider router={AppRouter} />
      <RootSibling />
    </Provider>
  )
}

export default App
