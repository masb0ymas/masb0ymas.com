'use client'

import { Moon, Sun } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState } from 'react'
import { useBreakPoint } from '~/hooks/useBreakpoint'
import { env } from '~/lib/constant/env'
import { cn } from '~/lib/utils'
import { Button } from '../ui/button'

type NavLinks = { label: string; href: string }

const navbarLinks: NavLinks[] = [
  { href: '/', label: 'Home' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Project' },
  { href: '#', label: 'About' },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed z-50 w-full border-b border-neutral-700 bg-neutral-900/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto h-[4rem] max-w-7xl px-4 md:px-6">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="hover:text-primary-200 dark:hover:text-primary-100 text-xl font-bold text-neutral-800 transition-colors md:text-2xl dark:text-white"
            >
              {env.APP_NAME}
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:gap-6 lg:flex">
            {navbarLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-primary-200 dark:hover:text-primary-100 text-base font-semibold text-neutral-800 transition-colors dark:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="ghost"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {theme === 'light' ? <Moon className="size-4" /> : <Sun className="size-4" />}
              </Button>

              <Button variant="secondary" className="px-6 font-semibold">
                Contact
              </Button>
            </div>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              className={cn(
                'mobile-menu-button -mr-2 rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset',
                'text-neutral-200 focus:ring-neutral-200'
              )}
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open main menu</span>
              <motion.svg
                key={open ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: open ? 180 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      <MobileNavbar open={open} onOpenChange={setOpen} />
    </nav>
  )
}

type MobileNavbarProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function MobileNavbar({ open, onOpenChange }: MobileNavbarProps) {
  const { breakpoint } = useBreakPoint()
  const isMobile = ['md', 'sm', 'xs'].includes(breakpoint as string)

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          className={cn(
            'mobile-menu flex origin-top flex-col gap-2 lg:hidden',
            (isMobile || open) && 'bg-neutral-25 h-screen text-neutral-900'
          )}
          initial={{ opacity: 0, height: 0, scaleY: 0 }}
          animate={{ opacity: 1, height: '100vh', scaleY: 1 }}
          exit={{
            opacity: 0,
            height: 0,
            scaleY: 0,
            transition: {
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
              opacity: { duration: 0.2 },
            },
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
            staggerChildren: 0.05,
          }}
        >
          <ul className="space-y-2 px-3 py-4 sm:px-6">
            {navbarLinks.map((item, index) => {
              if (item.href === '#') {
                return (
                  <motion.li
                    key={index}
                    className="relative h-[44px]"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <div
                      onClick={() => {
                        onOpenChange(!open)
                      }}
                      className={cn(
                        'flex h-full w-full cursor-pointer items-center px-3 py-2 text-base font-medium',
                        'text-neutral-100 transition-colors hover:bg-neutral-200/80 hover:text-neutral-800'
                      )}
                    >
                      {item.label}
                    </div>
                  </motion.li>
                )
              }

              return (
                <motion.li
                  key={index}
                  className="relative h-[44px]"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <a
                    href={item.href}
                    className={cn(
                      'flex h-full w-full cursor-pointer items-center px-3 py-2 text-base font-medium hover:cursor-pointer',
                      'text-neutral-100 transition-colors hover:bg-neutral-200/80 hover:text-neutral-800'
                    )}
                    onClick={() => onOpenChange(!open)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              )
            })}

            <motion.li
              className="flex items-center lg:hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: navbarLinks.length * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Button className="w-full">Contact</Button>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
