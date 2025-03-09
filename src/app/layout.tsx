import glob from 'fast-glob'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Slide, ToastContainer } from 'react-toastify'
import { ScrollHandler } from '@/components/ScrollHandler'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { type Section } from '@/components/SectionProvider'

import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: {
    template: '%s - Rebill Docs',
    default: 'Rebill Docs',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <div className="w-full">
            <ScrollHandler />
            <Layout allSections={allSections}>{children}</Layout>
            <ToastContainer
              hideProgressBar
              transition={Slide}
              limit={1}
              position="bottom-right"
              toastClassName="bg-slate-50 text-slate-900 dark:bg-[#27272A] dark:text-white mt-10"
              autoClose={1000}
            />
          </div>
        </Providers>
      </body>
    </html>
  )
}
