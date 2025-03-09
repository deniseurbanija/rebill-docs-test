'use client'

import Link from 'next/link'
import {
  type MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import {
  RectangleGroupIcon,
  SquaresPlusIcon,
  CubeTransparentIcon,
  ChatBubbleLeftIcon,
  LinkIcon,
  CreditCardIcon,
  ArrowPathIcon,
  ChartBarIcon,
  GlobeAmericasIcon,
} from '@heroicons/react/24/solid'

interface Resource {
  href: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  pattern: Omit<
    React.ComponentPropsWithoutRef<typeof GridPattern>,
    'width' | 'height' | 'x'
  >
}

const resources: Array<Resource> = [
  {
    name: 'Crossborder Payments',
    href: '/products/payments',
    description:
      'Collect as a local over cards, bank transfer, e-wallets and more in 10+ countries of LATAM.',
    icon: GlobeAmericasIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    name: 'Subscriptions',
    href: '/products/subscriptions',
    description:
      'Create a flexible billing setup that supports recurring payments or charges based on use, with added benefits like multiple pricing tiers, discount codes, and free trials.',
    icon: ArrowPathIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
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
    name: 'Payment Link',
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
    name: 'Notifications',
    href: '/products/notifications',
    description:
      'Optimize your customer lifecycle with automated and omnichannel communications, setting up your own email domain and SMS templates.',
    icon: ChatBubbleLeftIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    name: 'Reports',
    href: '/products/reports',
    description:
      'Get advanced SaaS reports like ARR, MRR, Churn Rate, LTV and more.',
    icon: ChartBarIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    name: 'Smart Retries',
    href: '/products/smart-retries',
    description:
      'Set your own frequency rules to automatically retry failed subscription payments, reducing customer churn and increasing your retention rate.',
    icon: CubeTransparentIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  }
]

function ResourceIcon({ icon: Icon }: { icon: Resource['icon'] }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-blue-300/10 dark:group-hover:ring-blue-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-blue-300/10 dark:group-hover:stroke-blue-400" />
    </div>
  )
}

function ResourcePattern({
  mouseX,
  mouseY,
  ...gridProps
}: Resource['pattern'] & {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d7e1ed] to-[#dfebfb] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#3b82f666] dark:to-[#0d1c34c7]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Resource({ resource }: { resource: Resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <ResourceIcon icon={resource.icon} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function Products() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="products">
        Products
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
      <div className="flex justify-end">
        <Button href="/products" variant="text" arrow="right" className="mt-10">
          View All Products
        </Button>
      </div>
    </div>
  )
}
