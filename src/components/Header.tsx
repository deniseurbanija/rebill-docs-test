'use client'
import { forwardRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/MobileNavigation'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { useIsFullWidthView } from './Layout'
import { MobileSearch, Search } from '@/components/Search'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useUserContext } from './context/UserContext'

function TopLevelNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isDeveloperToolsActive =
    href === '/developer-tools' &&
    (pathname?.startsWith('/api') || pathname?.startsWith('/sdk'))
  const isActive =
    pathname === href ||
    pathname?.startsWith(href + '/') ||
    isDeveloperToolsActive

  return (
    <li className="relative">
      <Link
        href={href}
        className={clsx(
          'text-sm leading-5 transition duration-300',
          isActive
            ? 'text-zinc-900 dark:text-white'
            : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
        )}
      >
        {children}
      </Link>
      {isActive && (
        <div className="absolute -bottom-2 h-0.5 w-full rounded-none bg-[#58616E] dark:bg-white" />
      )}
    </li>
  )
}

export const LoginButton = () => {
  const userInfo = useUserContext()

  const handleSignOut = () => {
    fetch('/api/signOut', {
      method: 'POST',
    })
    window.location.href = '/'
  }

  return userInfo?.rebillUserEmail ? (
    <Button onClick={handleSignOut}>Sign out</Button>
  ) : (
    <Button href="https://my.rebill.com">Sign in</Button>
  )
}

export const Header = forwardRef<
  React.ElementRef<'div'>,
  { className?: string }
>(function Header({ className }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let isFullWidthView = useIsFullWidthView()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      ref={ref}
      className={clsx(
        className,
        !isInsideMobileNavigation && !isFullWidthView
          ? 'backdrop-blur-sm lg:left-0 xl:left-80 dark:backdrop-blur'
          : 'backdrop-blur-sm lg:left-0 xl:left-0 dark:backdrop-blur',
        isInsideMobileNavigation
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]',
        isFullWidthView && !isInsideMobileNavigation
          ? 'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-0 lg:left-0 lg:z-30 lg:px-8 xl:left-0'
          : 'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80',
      )}
      style={
        {
          '--bg-opacity-light': bgOpacityLight,
          '--bg-opacity-dark': bgOpacityDark,
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-zinc-900/7.5 dark:bg-white/7.5',
        )}
      />
      {isFullWidthView ? (
        <div className="hidden lg:flex">
          <Link href="/" aria-label="Home" className="flex items-center gap-3">
            <Logo className="h-6" />
            <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
              DOCS
            </span>
          </Link>
        </div>
      ) : (
        <></>
      )}
      <Search />
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="h-6" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            <TopLevelNavItem href="#">Home</TopLevelNavItem>
            <TopLevelNavItem href="#">Products</TopLevelNavItem>
            <TopLevelNavItem href="#">Guides</TopLevelNavItem>
            <TopLevelNavItem href="#">
              Developer Tools
            </TopLevelNavItem>
            <TopLevelNavItem href="/  ">No-code</TopLevelNavItem>
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
          <ThemeToggle />
        </div>
        <div className="hidden min-[416px]:contents">
          <LoginButton />
        </div>
      </div>
    </motion.div>
  )
})
