'use client'

import { Suspense, useEffect } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import { UserProvider } from '@/components/context/UserContext'
import { useSearchParams } from 'next/navigation'

function ThemeWatcher() {
  const accessKeyTargetName = process.env.NEXT_PUBLIC_ACCESS_KEY_NAME
  const accessKeyTargetValue = process.env.NEXT_PUBLIC_ACCESS_KEY_VALUE
  const env = process.env.NEXT_PUBLIC_ENV
  const searchParams = useSearchParams()
  const queryParamAccessKeyValue =
    accessKeyTargetName && searchParams?.get(accessKeyTargetName)
  const localStorageAccessKeyValue =
    accessKeyTargetName && localStorage.getItem(accessKeyTargetName)

  useEffect(() => {
    if (env === 'staging') {
      if (
        searchParams &&
        queryParamAccessKeyValue !== accessKeyTargetValue &&
        localStorageAccessKeyValue !== accessKeyTargetValue
      ) {
        window.location.href = 'https://docs.rebill.com'
      } else if (
        searchParams &&
        !!accessKeyTargetName &&
        !!queryParamAccessKeyValue &&
        queryParamAccessKeyValue === accessKeyTargetValue
      ) {
        localStorage.setItem(accessKeyTargetName, queryParamAccessKeyValue)
      }
    }
  }, [searchParams, localStorageAccessKeyValue])

  let { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    let media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      let systemTheme = media.matches ? 'dark' : 'light'
      if (resolvedTheme === systemTheme) {
        setTheme('system')
      }
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [resolvedTheme, setTheme])

  return null
}

const useInitialLog = () => {
  useEffect(() => {
    console.log(
      `%c
                //////////////
            ////           ///
 ////////////              ///
  //////////        //////////
   ////////        //////////
    //////        ///
     /////        ///
      ///         //
       /////////////
`,
      'color: #0066FF; font-weight: bold; font-size: 14px',
    )
    console.log(
      '%cJoin us in building something awesome jobs@rebill.com',
      'color: #0066FF; font-weight: bold; font-size: 14px',
    )
  }, [])
}

export function Providers({ children }: { children: React.ReactNode }) {
  useInitialLog()
  return (
    <Suspense>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <ThemeWatcher />
        <UserProvider>{children}</UserProvider>
      </ThemeProvider>
    </Suspense>
  )
}
