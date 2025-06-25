'use client'

import React from 'react'
import { Navbar as MTNavbar, Collapse, IconButton, Typography } from '@material-tailwind/react'
import { XMarkIcon, Bars3Icon, BookOpenIcon, BriefcaseIcon, CodeBracketSquareIcon } from '@heroicons/react/24/solid'
import { isLikelyURL } from '../../utils'

const NAV_MENU = [
  {
    name: 'Work History',
    icon: BriefcaseIcon,
    href: '#work',
  },
  {
    name: 'Project',
    icon: CodeBracketSquareIcon,
    href: '#project',
  },
  {
    name: 'Blog',
    icon: BookOpenIcon,
    href: '/blog',
  },
]

interface NavItemProps {
  children: React.ReactNode
  href?: string
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        {...({} as any)}
        as="a"
        href={href}
        target={isLikelyURL(href) ? '_blank' : '_self'}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  )
}

export function Navbar() {
  const [open, setOpen] = React.useState(false)

  function handleOpen() {
    setOpen((cur) => !cur)
  }

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpen(false))
  }, [])

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar {...({} as any)} blurred color="white" className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6">
          <div className="flex items-center justify-between">
            <Typography {...({} as any)} color="blue-gray" className="text-lg font-bold">
              <a href="#" target="_self">
                PACE <span className="bg-blue-gray-900 text-white rounded-3xl p-1">11</span>
              </a>
            </Typography>
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  {name}
                </NavItem>
              ))}
            </ul>
            {/* <div className="hidden items-center gap-4 lg:flex">
              <Button variant="text">Log in</Button>
              <a
                href="https://www.material-tailwind.com/blocks"
                target="_blank"
              >
                <Button color="gray">Blocks</Button>
              </a>
            </div> */}
            <IconButton
              {...({} as any)}
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
                ))}
              </ul>
              {/* <div className="mt-6 mb-4 flex items-center gap-4">
                <Button variant="text">Log in</Button>
                <a
                  href="https://www.material-tailwind.com/blocks"
                  target="_blank"
                >
                  <Button color="gray">blocks</Button>
                </a>
              </div> */}
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  )
}

export default Navbar
