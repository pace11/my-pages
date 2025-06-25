'use client'

import React from 'react'
import { Navbar as MTNavbar, Typography } from '@material-tailwind/react'
import Link from 'next/link'

export function NavbarBlog() {
  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar {...({} as any)} blurred color="white" className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6">
          <div className="flex items-center justify-between">
            <Typography {...({} as any)} color="blue-gray" className="text-lg font-bold">
              <Link href="/">
                PACE <span className="bg-blue-gray-900 text-white rounded-3xl p-1">11</span>
              </Link>
            </Typography>
          </div>
        </MTNavbar>
      </div>
    </div>
  )
}

export default NavbarBlog
