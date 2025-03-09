import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/what-is-rebill',
    name: 'What\'s Rebill?',
    description: 'Process payments in over 10 countries and collect the funds in the country where your company is incorporated.',
  },
  {
    href: '/why-rebill',
    name: 'Why you should use Rebill?',
    description:
      'A gateway where you always get human support and you only pay for what you use, no hidden costs or fees.',
  },
  {
    href: '/guides/apm',
    name: 'APMs',
    description:
      'Cash, Bank transfer, and e-wallet payments.',
  },
  {
    href: '/guides/webhooks',
    name: 'Webhooks',
    description:
      'Receive notifications in other systems for different customer lifecycle events.',
  }
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Resources
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
          <Button href="/guides" variant="text" arrow="right" className="mt-10">
              View All Guides
          </Button>
      </div>
    </div>
  )
}
