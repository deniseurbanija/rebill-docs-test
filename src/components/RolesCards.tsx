'use client'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'

interface Permission {
  can: string[]
  cannot: string[]
}

interface Role {
  title: string
  description: string
  permissions: Permission
}

interface RoleCardProps {
  role: Role
}

function RolesCards({ role }: RoleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="mb-9 dark:bg-[#27272a]">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="">
            <CardTitle>{role.title}</CardTitle>
            <div className="my-4 flex items-start gap-2">
              <p className="m-0 text-sm text-gray-600 dark:text-gray-400">{role.description}</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          View details
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isExpanded ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
            />
          </svg>
        </Button>

        {isExpanded && (
          <div className="mt-4 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-500">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Permission of this role:
              </div>
              <ul className="ml-6 space-y-2">
                {role.permissions.can.map((permission, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                    {permission}
                  </li>
                ))}
              </ul>
            </div>

            {role.permissions.cannot.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-500">
                  <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Restrictions of this role:
              </div>
              <ul className="ml-6 space-y-2">
                {role.permissions.cannot.map((restriction, index) => (
                  <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                    {restriction}
                  </li>
                ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function RolePermissions() {
  const roles = [
    {
      title: 'Admin',
      description: 'For managers who need full access to the organization.',
      permissions: {
        can: [
          'Write and read access to products',
          'Write and read access to customers',
          'Write and read access to payments',
          'Write and read access to subscriptions',
          'Read metrics',
          'Read balance',
          'Write and read access to webhooks',
          'Write and read access to API keys',
          'Write and read access to notifications',
          'Write and read access to organization',
          'Write and read access to roles',
          'Write and read access to profile',
        ],
        cannot: [], // Admin has full access
      },
    },
    {
      title: 'Viewer',
      description:
        "Customers can resell or transfer their tickets if they can't make it to the event.",
      permissions: {
        can: [
          'Read access to products',
          'Read access to customers',
          'Read access to payments',
          'Read access to subscriptions',
          'Read metrics',
          'Read access to organization',
          'Read access to roles',
          'Write and read access to profile',
        ],
        cannot: [
          'Write access to products',
          'Write access to customers',
          'Write access to payments',
          'Write access to subscriptions',
          'Read balance',
          'Read or write access to webhooks',
          'Read or write access to API keys',
          'Read or write access to notifications',
          'Write access to roles',
        ],
      },
    },
    {
      title: 'Manager',
      description:
        "Customers can resell or transfer their tickets if they can't make it to the event.",
      permissions: {
        can: [
          'Write and read access to products',
          'Write and read access to customers',
          'Write and read access to payments',
          'Write and read access to subscriptions',
          'Read metrics',
          'Read balance',
          'Write and read access to notifications',
          'Read access to organization',
          'Write and read access to roles',
          'Write and read access to profile',
        ],
        cannot: [
          'Read or write access to webhooks',
          'Read or write access to API keys',
          'Write access to organization',
        ],
      },
    },
    {
      title: 'Sales',
      description:
        "Customers can resell or transfer their tickets if they can't make it to the event.",
      permissions: {
        can: [
          'Write and read access to products',
          'Write and read access to customers',
          'Write and read access to payments',
          'Write and read access to subscriptions',
          'Read metrics',
          'Read access to organization',
          'Read access to roles',
          'Write and read access to profile',
        ],
        cannot: [
          'Read balance',
          'Read or Write access to webhooks',
          'Read or Write access to API keys',
          'Read or Write access to notifications',
          'Write access to organization',
          'Write access to roles',
        ],
      },
    },
    {
      title: 'Collection Agent',
      description:
        "Customers can resell or transfer their tickets if they can't make it to the event.",
      permissions: {
        can: [
          'Write and read access to products',
          'Write and read access to customers',
          'Write and read access to payments',
          'Write and read access to subscriptions',
          'Read metrics',
          'Read balance',
          'Read access to notifications',
          'Read access to organization',
          'Read access to roles',
          'Write and read access to profile',
        ],
        cannot: [
          'Read or write access to webhooks',
          'Read or write access to API keys',
          'Write access to notifications',
          'Write access to organization',
          'Write access to roles',
        ],
      },
    },
    {
      title: 'Finance',
      description:
        'For those who need to view reports and information about payments and subscriptions.',
      permissions: {
        can: [
          'Read access to products',
          'Write and read access to customers',
          'Write and read access to payments',
          'Write and read access to subscriptions',
          'Read metrics',
          'Read balance',
          'Read access to notifications',
          'Read access to organization',
          'Read access to roles',
          'Write and read access to profile',
        ],
        cannot: [
          'Write access to products',
          'Read or write access to webhooks',
          'Read or write access to API keys',
          'Write access to notifications',
          'Write access to organization',
          'Write access to roles',
        ],
      },
    },
    {
      title: 'Developer',
      description:
        'For those who need access to the Developer center section and basic permissions for testing.',
      permissions: {
        can: [
          'Write and read access to products',
          'Read access to customers',
          'Read access to payments',
          'Read access to subscriptions',
          'Write and read access to webhooks',
          'Write and read access to API keys',
          'Write and read access to notifications',
          'Read access to organization',
          'Read access to roles',
          'Write and read access to profile',
        ],
        cannot: [
          'Write access to customers',
          'Write access to payments',
          'Write access to subscriptions',
          'Read metrics',
          'Read balance',
          'Write access to organization',
          'Write access to roles',
        ],
      },
    },
  ]

  return (
    <div className="max-w-3xl  p-4 pl-0">
      {roles.map((role, index) => (
        <RolesCards key={index} role={role} />
      ))}
    </div>
  )
}
