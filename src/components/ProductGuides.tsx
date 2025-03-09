import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/guides/customers',
    name: 'Customers',
    description: 'The section where you can individually view your customers\’ information.',
  },
  {
    href: '/guides/balances',
    name: 'Balances',
    description: 'Understanding your balance in Rebill: when is my collection available for withdrawal.',
  },
  {
    href: '/guides/withdrawals',
    name: 'Withdrawals',
    description:
      'How to get your collection from Rebill\'s balance to your bank account',
  },
  {
    href: '/guides/apm',
    name: 'APMs',
    description:
      'Cash, Bank transfer, and e-wallet payments.',
  },
  {
    href: '/guides/payouts',
    name: 'Payouts',
    description:
      'Send multiple payments with ease and accuracy efficiently',
  },
  {
    href: '/guides/webhooks',
    name: 'Webhooks',
    description:
      'Receive notifications in other systems for different customer lifecycle events.',
  },
  {
    href: '/guides/members-roles',
    name: 'Members & Roles',
    description:
      'Provide different permissions to each member of your organization.',
  },
  {
    href: '/guides/tenants',
    name: 'Franchises & Subsidiaries',
    description:
      'Track and manage different franchises, subsidiaries and business units from the same control panel.',
  },
  {
    href: '/guides/document-types',
    name: 'Document Types',
    description:
      'Each country has its own set of required information in order to process a successful payment. Here\'s a list of document types for each one.',
  },
  {
    href: '/guides/charge-limits',
    name: 'Charge Limits',
    description:
      'Learn about the minimum and maximum amounts accepted in each country (according to the payment method.',
  },
  {
    href: '/guides/soft-descriptor',
    name: 'Soft descriptor',
    description:
      'Customize the name with which your clients view your charges in their card statements.',
  }
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
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
    </div>
  )
}
