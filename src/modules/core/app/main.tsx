import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import '@/modules/core/translations/index'

import { router } from '@/modules/core/router'

import '@/modules/core/styles/globals.css'

import { ThemeProvider } from '@/modules/core/providers/theme-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
