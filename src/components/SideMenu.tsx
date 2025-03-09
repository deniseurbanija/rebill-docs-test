// navigationConfig.js
import { usePathname } from 'next/navigation'

interface NavGroup {
  title: string
  links: Array<{
    title: string
    href: string
  }>
}

export const sideMenu = [
  {
    title: 'Overview',
    path: ['/guides/*', '/products/*', '/why-rebill', '/what-is-rebill'],
    links: [
      { title: 'Introduction', href: '/' },
      { title: "What's Rebill?", href: '/what-is-rebill' },
      { title: 'Why Rebill?', href: '/why-rebill' },
    ],
  },
  {
    title: 'Overview',
    path: ['/sdk/*'],
    links: [
      {
        title: 'Introduction',
        href: '/sdk',
      },
      { title: 'Test Payment Methods', href: '/sdk/test-payment-methods' },
    ],
  },
  {
    title: 'Overview',
    path: ['/api/*'],
    links: [
      { title: 'Quickstart', href: '/api/quickstart' },
      { title: 'Test Payment Methods', href: '/api/test-payment-methods' },
    ],
  },
  {
    title: 'SDK',
    path: ['/sdk/*'],
    links: [
      { title: 'Checkout', href: '/sdk/checkout' },
      { title: 'Instant checkout', href: '/sdk/instant-checkout' },
      { title: 'Card Tokenization', href: '/sdk/card-tokenization' },
      { title: 'Renew subscription card', href: '/sdk/renew-subscription-card' },
      {
        title: 'NextJS implementation example ',
        href: '/sdk/implementation-examples',
      },
    ],
  },
  {
    title: 'Guides',
    path: ['/guides/*'],
    links: [
      { title: 'Introduction', href: '/guides' },
      { title: 'APMs', href: '/guides/apm' },
      { title: 'Balances', href: '/guides/balances' },
      { title: 'Chargebacks', href: '/guides/chargebacks' },
      { title: 'Charge Limits', href: '/guides/charge-limits' },
      { title: 'Customers', href: '/guides/customers' },
      { title: 'Members & Roles', href: '/guides/members-roles' },
      { title: 'Plans', href: '/guides/plans' },
      { title: 'Products', href: '/guides/products' },
      { title: 'Refunds', href: '/guides/refunds' },
      { title: 'Soft Descriptor', href: '/guides/soft-descriptor' },
      { title: 'Invoices', href: '/guides/invoices' },
      { title: 'Webhooks', href: '/guides/webhooks' },
      { title: 'Withdrawals', href: '/guides/withdrawals' },
      { title: 'Payouts', href: '/guides/payouts' },
      { title: 'Processing models', href: '/guides/processing-models' },
    ],
  },
  {
    title: 'Products',
    path: ['/products/*'],
    links: [
      { title: 'Checkout Landing', href: '/products/checkout-landing' },
      { title: 'Notifications', href: '/products/notifications' },
      { title: 'Payment Links', href: '/products/payment-links' },
      { title: 'Payments', href: '/products/payments' },
      { title: 'Installments', href: '/products/installments' },
      { title: 'Reports', href: '/products/reports' },
      { title: 'Smart Retries', href: '/products/smart-retries' },
      { title: 'Subscriptions', href: '/products/subscriptions' },
      { title: 'Test Payment Methods', href: '/products/test-payment-methods' },
    ],
  },
  {
    title: 'API Reference',
    path: ['/api/*'],
    links: [
      { title: 'Authentication', href: '/api/reference/authentication' },
      { title: 'Cards', href: '/api/reference/cards' },
      { title: 'Checkout', href: '/api/reference/checkout' },
      { title: 'Coupons', href: '/api/reference/coupons' },
      { title: 'Customers', href: '/api/reference/customers' },
      { title: 'My Organization', href: '/api/reference/my-organization' },
      { title: 'Payment Links', href: '/api/reference/payment-links' },
      { title: 'Payments', href: '/api/reference/payments' },
      { title: 'Plans', href: '/api/reference/plans' },
      { title: 'Products', href: '/api/reference/products' },
      { title: 'Exchange Rates', href: '/api/reference/exchange-rates' },
      { title: 'Refunds', href: '/api/reference/refunds' },
      { title: 'Smart Retries', href: '/api/reference/smart-retries' },
      { title: 'Subscriptions', href: '/api/reference/subscriptions' },
      { title: 'Roles & Permissions', href: '/api/reference/roles' },
      { title: 'Team Members', href: '/api/reference/team-members' },
      { title: 'Webhooks', href: '/api/reference/webhooks' },
      { title: 'Email Templates', href: '/api/reference/email-templates' },
      { title: 'SMS Templates', href: '/api/reference/sms-templates' },
      { title: 'Helpers', href: '/api/reference/helpers' },
    ],
  },
  // {
  //   title: 'API Reference',
  //   path: ['/api/v3/*'],
  //   links: [
  //     { title: 'Authentication', href: '/api/v3/authentication' },
  //     { title: 'Cards', href: '/api/v3/cards' },
  //     { title: 'Checkout', href: '/api/v3/checkout' },
  //     { title: 'Coupons', href: '/api/v3/coupons' },
  //     { title: 'Customers', href: '/api/v3/customers' },
  //     { title: 'Email Templates', href: '/api/v3/email-templates' },
  //     { title: 'My Organization', href: '/api/v3/my-organization' },
  //     { title: 'Payment Links', href: '/api/v3/payment-links' },
  //     { title: 'Payments', href: '/api/v3/payments' },
  //     { title: 'Plans', href: '/api/v3/plans' },
  //     { title: 'Products', href: '/api/v3/products' },
  //     { title: 'Exchange Rates', href: '/api/v3/exchange-rates' },
  //     { title: 'Roles & Permissions', href: '/api/v3/roles' },
  //     { title: 'Refunds', href: '/api/v3/refunds' },
  //     { title: 'Smart Retries', href: '/api/v3/smart-retries' },
  //     { title: 'SMS Templates', href: '/api/v3/sms-templates' },
  //     { title: 'Suborganizations', href: '/api/v3/suborganizations' },
  //     { title: 'Subscriptions', href: '/api/v3/subscriptions' },
  //     { title: 'Team Members', href: '/api/v3/team-members' },
  //     { title: 'Webhooks', href: '/api/v3/webhooks' },
  //   ],
  // },
]

const matchesPath = (pathPattern, thisPath) => {
  if (Array.isArray(pathPattern)) {
    return pathPattern.some((pattern) => matchesSinglePath(pattern, thisPath))
  }
  return matchesSinglePath(pathPattern, thisPath)
}

const matchesSinglePath = (pathPattern, thisPath) => {
  if (pathPattern.endsWith('/*')) {
    const basePath = pathPattern.slice(0, -2)
    return thisPath.startsWith(basePath)
  }
  return pathPattern === thisPath
}

export const getFilteredNavigation = (thisPath) => {
  return sideMenu.filter((group) => matchesPath(group.path, thisPath))
}

export const useFilteredNav = () => {
  const currentPath = usePathname()
  return sideMenu.filter((group) => matchesPath(group.path, currentPath))
}
