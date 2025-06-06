import { createBrowserRouter } from 'react-router'

import { PublicLayout } from './layouts/public-layout'
import { AuthLayout } from './layouts/auth-layout'

import { Home, NotFound, SignIn, SignUp, Dashboard } from '@pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
