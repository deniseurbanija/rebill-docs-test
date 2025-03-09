'use client'

import { GridPattern } from '@/components/GridPattern'
import { LinkIcon, CreditCardIcon} from '@heroicons/react/24/solid';
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
    name: 'API',
    href: '/api',
    description:
      'Integrate Rebill\'s API to your application and start processing payments.',
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
    name: 'SDK',
    href: '/sdk',
    description:
      'Lear everything you need to know to start using Rebill\'s SDK.',
    icon: LinkIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
]

export function DeveloperTools() {
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
