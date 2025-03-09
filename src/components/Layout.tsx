'use client'

import { createContext, useContext } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { type Section, SectionProvider } from '@/components/SectionProvider'
import { sideMenu } from '@/components/SideMenu'


const IsFullWidthViewContext = createContext(false);
export const useIsFullWidthView = () => useContext(IsFullWidthViewContext);

export function Layout({
  children,
  allSections,
}: {
  children: React.ReactNode
  allSections: Record<string, Array<Section>>
}) {
  let pathname = usePathname()
  const isFullWidthView = !(matchesPath(pathname, sideMenu));
  const divClasses = (isFullWidthView) ? "h-full" : "h-full lg:ml-72 xl:ml-80";

  return (
    <SectionProvider sections={allSections[pathname!] ?? []}>
      <div className={divClasses}>
        <IsFullWidthViewContext.Provider value={isFullWidthView}>
          <motion.header
            layoutScroll
            className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
          >
            {isFullWidthView ? (
              <div className="contents lg:pointer-events-auto lg:block lg:w-0 lg:overflow-y-auto lg:border-r lg:border-none lg:px-0 lg:pb-0 lg:pt-4 xl:w-0 lg:dark:border-white/10">
                <Header />
              </div>
            ) : (
              <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-8 lg:pb-8 lg:pt-3 xl:w-80 lg:dark:border-white/10">
                <div className="hidden lg:flex">
                  <Link
                    href="/"
                    aria-label="Home"
                    className="flex items-center gap-3"
                  >
                    <Logo className="h-6" />
                    <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      DOCS
                    </span>
                  </Link>
                </div>
                <Header />
                <Navigation className="hidden lg:mt-7 lg:block" />
              </div>
            )}
          </motion.header>
          <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
            <main className="flex-auto">{children}</main>
            <Footer />
          </div>
        </IsFullWidthViewContext.Provider>
      </div>
    </SectionProvider>
  )
}

const matchesPath = (pathname: any, sideMenu: any): boolean => {
  if (!pathname) return false;

  if (pathname === '/') return false;

  for (const item of sideMenu) {
    for (const path of item.path) {
      if (path === pathname || (path.includes('*') && pathname.startsWith(path.replace('/*', '')))) {
        return true;
      }
    }
  }
  return false;
};
