'use client'
import React from 'react'
import { useUserContext } from './context/UserContext'

export const InitialSection = () => {
  const userInfo = useUserContext()
  const personalizedText = userInfo?.rebillName ? `Welcome ${userInfo.rebillName}.` : ''

  return (
    <p>
      {personalizedText} Find in this docs information about our products,
      integration docs and more.
    </p>
  )
}
