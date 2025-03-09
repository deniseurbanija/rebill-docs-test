import Link from 'next/link'
import clsx from 'clsx'

import { Feedback } from '@/components/Feedback'
import { Heading } from '@/components/Heading'
import { Prose } from '@/components/Prose'
import React, { ReactNode } from 'react'

export const a = Link
export { Button } from '@/components/Button'
export { CodeGroup, Code as code, Pre as pre } from '@/components/Code'
import ClientPropertyToggle from './ClientPropertyToggle'
import ClientValueProperty from './ClientValueProperty'

export interface PropertyValue {
  value: string | PropertyValueMap
  type: string
  required?: boolean
}

export interface PropertyValueMap {
  [key: string]: PropertyValue
}

export interface ObjectPropertiesProps {
  object: PropertyValueMap
  depth?: number
}

export interface PropertyValueComponentProps {
  value: PropertyValue
  depth?: number
}

export function wrapper({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex h-full flex-col pb-10 pt-16">
      <Prose className="flex-auto">{children}</Prose>
      <footer className="mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl">
        <Feedback />
      </footer>
    </article>
  )
}

export const h1 = function H1(
  props: Omit<React.ComponentPropsWithoutRef<typeof Heading>, 'level'>,
) {
  return <Heading level={1} {...props} />
}

export const h2 = function H2(
  props: Omit<React.ComponentPropsWithoutRef<typeof Heading>, 'level'>,
) {
  return <Heading level={2} {...props} />
}

export const h3 = function H3(
  props: Omit<React.ComponentPropsWithoutRef<typeof Heading>, 'level'>,
) {
  return <Heading level={3} {...props} />
}

function InfoIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="8" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 7.75h1.5v3.5"
      />
      <circle cx="8" cy="4" r=".5" fill="none" />
    </svg>
  )
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-blue-500/20 bg-blue-50/50 p-4 leading-6 text-blue-900 dark:border-blue-500/30 dark:bg-blue-500/5 dark:text-blue-200 dark:[--tw-prose-links-hover:theme(colors.blue.300)] dark:[--tw-prose-links:theme(colors.white)]">
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-blue-500 stroke-white dark:fill-blue-200/20 dark:stroke-blue-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  )
}

export function Col({
  children,
  sticky = false,
}: {
  children: React.ReactNode
  sticky?: boolean
}) {
  return (
    <div
      className={clsx(
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky && 'xl:sticky xl:top-24',
      )}
    >
      {children}
    </div>
  )
}

const renderObject = (obj: any): JSX.Element => (
  <ul className="list-none pl-4">
    {Object.entries(obj).map(([key, value]) => (
      <li key={key}>
        <strong>{key}:</strong>{' '}
        {typeof value === 'object' ? renderObject(value) : value?.toString()}
      </li>
    ))}
  </ul>
)

export interface PropertyProps {
  name: string
  type?: string
  isRequired?: boolean
  isDeprecated?: boolean
  showToggle?: boolean
  description?: string
  children: ReactNode
}

export const Property: React.FC<PropertyProps> = (props) => {
  return <ClientPropertyToggle {...props} /> //this component ensures that the mdx.tsx file remains as SSG, while the client-side operations occur outside of this special file.
}

const PropertyValueComponent: React.FC<PropertyValueComponentProps> = (
  props,
) => {
  const { value, depth } = props
  const isObject = (val) =>
    typeof val === 'object' && val !== null && !Array.isArray(val)

  if (value.type === 'object' && isObject(value.value)) {
    return <ClientValueProperty {...props} /> //this component ensures that the mdx.tsx file remains as SSG, while the client-side operations occur outside of this special file.
  } else {
    return <div className="py-2">{value.value as String}</div>
  }
}

export const ObjectProperties: React.FC<ObjectPropertiesProps> = ({
  object,
  depth = 0,
}) => {
  const nextDepth = depth + 1

  return (
    <ul className={`pl-${4 * nextDepth} list-none`}>
      {Object.entries(object).map(([key, propValue]) => (
        <li key={key} className="">
          <div className="flex items-center space-x-2">
            <strong className={`font-mono text-sm text-slate-800`}>
              {key}
            </strong>
            <span className="inline-block">
              <code className="rounded bg-gray-100 px-2 py-1 font-mono text-xs text-slate-600">
                {propValue.type}
              </code>
            </span>
            {propValue?.required && (
              <span className="inline-block">
                <code className="rounded bg-red-100 px-2 py-1 font-mono text-xs text-red-500">
                  required
                </code>
              </span>
            )}
          </div>
          <PropertyValueComponent value={propValue} depth={nextDepth} />
        </li>
      ))}
    </ul>
  )
}

export function Properties({ children }: { children: ReactNode }) {
  return <ul className="list-none divide-y divide-gray-200">{children}</ul>
}
