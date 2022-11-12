import React from 'react'
import {
  Home as IconHome
  // MoveToInbox as IconInbox,
  // StarBorder as IconStarBorder
} from '@mui/icons-material'

export interface MenuItem {
  title: string
  icon: JSX.Element
  path?: string
  children?: MenuItemChild[]
}

export interface MenuItemChild {
  title: string
  icon: JSX.Element
  path: string
}

export const MenuData: MenuItem[] = [
  {
    icon: <IconHome />,
    title: 'Home',
    path: '/'
  }
  // {
  //   icon: <IconStarBorder />,
  //   title: '/Test',
  //   path: '/two'
  // },
  // {
  //   icon: <IconInbox />,
  //   title: 'Caryou',
  //   children: [
  //     {
  //       icon: <IconStarBorder />,
  //       title: 'Star1',
  //       path: '/temp'
  //     },
  //     {
  //       icon: <IconStarBorder />,
  //       title: 'Star2',
  //       path: '/four'
  //     }
  //   ]
  // },
  // {
  //   icon: <IconInbox />,
  //   title: 'Caryou1111',
  //   children: [
  //     {
  //       icon: <IconStarBorder />,
  //       title: 'Star11111',
  //       path: '/temp11'
  //     },
  //     {
  //       icon: <IconStarBorder />,
  //       title: 'Star22222',
  //       path: '/four11'
  //     }
  //   ]
  // }
]
