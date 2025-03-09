'use client'
import React, { useState } from 'react'
import {
  ObjectProperties,
  PropertyValueComponentProps,
  PropertyValueMap,
} from './mdx'

const ClientValueProperty: React.FC<PropertyValueComponentProps> = ({
  value,
  depth = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div>
      <button
        onClick={toggleOpen}
        className="my-2 ml-4 mt-4 rounded-md border px-6 py-0.5 font-normal text-slate-700 shadow hover:text-slate-400 dark:bg-slate-100 dark:text-slate-700"
      >
        {isOpen ? '- Hide' : '+ Show'} properties
      </button>
      {isOpen && (
        <ObjectProperties
          object={value.value as PropertyValueMap}
          depth={depth + 1}
        />
      )}
    </div>
  )
}

export default ClientValueProperty
