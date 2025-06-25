'use client'

import React from 'react'
import { ThemeProvider } from '@material-tailwind/react'

export function LayoutBlog({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default LayoutBlog
