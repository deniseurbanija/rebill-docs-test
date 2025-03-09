'use client'

import { GridPattern } from '@/components/GridPattern'
import { LinkIcon, CreditCardIcon, RectangleGroupIcon } from '@heroicons/react/24/solid';
import CardResource from './CardResource'

interface Resource {
  href: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  pattern: Omit<
    React.ComponentPropsWithoutRef<typeof GridPattern>,
    'width' | 'height' | 'x'
  >
} // TODO: extraer interfaz de Resource


const resources: Array<Resource> = [
  {
    name: 'Checkout Landing',
    href: '/products/checkout-landing',
    description:
      'Launch no-code checkout with your own company logo and domain.',
    icon: CreditCardIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    name: 'Payment Links',
    href: '/products/payment-links',
    description:
      'Learn about the message model and how to create, retrieve, update, delete, and list messages.',
    icon: LinkIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  // {
  //   name: 'Customer Portal',
  //   href: '/products/customer-portal',
  //   description:
  //     'A pre-made customer portal that allows your customers to view their past payments and self-manage their payment methods and subscriptions.',
  //   icon: RectangleGroupIcon,
  //   pattern: {
  //     y: 22,
  //     squares: [[0, 1]],
  //   }
  // },
  {
    name: 'Make.com Module',
    href: '/no-code/make-module',
    description:
      'A module already integrated to Rebill\'s API to help you build complex automations and integrations with 3rd party providers.',
    icon: RectangleGroupIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    }
  }
]

export function NoCodeTools() {
  return (
    <div className="my-16 xl:max-w-none">
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {resources.map((resource) => (
          <CardResource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
