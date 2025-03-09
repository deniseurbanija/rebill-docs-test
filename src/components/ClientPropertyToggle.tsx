'use client'
import React, { useState } from 'react'
import { PropertyProps } from './mdx'
import { Popover } from '@headlessui/react'

const ClientPropertyToggle: React.FC<PropertyProps> = ({
  name,
  type,
  isRequired,
  isDeprecated,
  description,
  children,
  showToggle = true
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)
  const isNestedArray = type === 'array' && !!children
  const isObject = type === 'object' || isNestedArray
  const shouldShowToggle = showToggle && isObject

  return (
    <div className="my-4">
      <div className="mt-4 flex flex-col items-start space-y-4">
        <div className="flex items-baseline space-x-2">
          <strong
            className={`font-mono text-sm text-slate-800 dark:text-zinc-300`}
          >
            {name}
          </strong>
          {type && (
            <span className="inline-block">
              <code
                className={`text-xxs rounded bg-gray-100 p-1 font-mono text-slate-600`}
              >
                {type}
              </code>
            </span>
          )}
          {isRequired && (
            <span className="inline-block">
              <code className="text-xxs ml-1 rounded bg-red-100 p-1 font-mono font-medium text-red-500">
                required
              </code>
            </span>
          )}
          {isDeprecated && (
            <span className="inline-block">
              <code className="text-xxs ml-1 rounded bg-amber-100 p-1 font-mono font-medium text-amber-400">
                deprecated
              </code>
            </span>
          )}
          {description && (
            <Popover className="relative ml-1">
              <Popover.Button
                as="div"
                tabIndex={0}
                className="relative inline-flex items-center justify-center border-none bg-transparent p-1 outline-none focus:outline-none"
              >
                <span className="sr-only">Information</span>
                <code className="text-xxs block rounded-full border border-transparent bg-transparent font-mono leading-none text-slate-500 hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-0">
                  i
                </code>
              </Popover.Button>
              <Popover.Panel className="absolute left-1/2 z-10 mt-1.5 min-w-96 max-w-xs -translate-x-1/2 transform">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white p-4 text-sm text-gray-900 dark:bg-gray-700 dark:text-white">
                    {description}
                  </div>
                </div>
              </Popover.Panel>
            </Popover>
          )}
        </div>
        {shouldShowToggle && (
          <button
            onClick={toggleOpen}
            className="my-2 rounded-md border px-6 py-0.5 font-normal text-slate-700 shadow hover:text-slate-400 dark:bg-zinc-800 dark:text-gray-300 dark:hover:text-gray-200 dark:border-zinc-700"
          >
            {isOpen ? '- Hide' : '+ Show'} properties
          </button>
        )}
      </div>
      {!shouldShowToggle || isOpen ? (
        <div className="ml-0">
          <div className="mt-0">{children}</div>
        </div>
      ) : null}
    </div>
  )
}

export default ClientPropertyToggle
