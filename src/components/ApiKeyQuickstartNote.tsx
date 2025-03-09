// ApiKeyQuickstartNote.js
'use client'
import React from 'react'
import { useUserContext } from '../components/context/UserContext'
import PublicEnvToLinkConverter from './PublicEnvToLinkConverter'

const ApiKeyQuickstartNote: React.FC = () => {
  const userData = useUserContext()

  return (
    <>
      {userData?.secretKey ? (
        <p>
          Your Sandbox secret key is already included here, as you're currently
          logged in to your account. If you wish to use your production key,
          retrieve it from the{' '}
          <PublicEnvToLinkConverter env="NEXT_PUBLIC_REBILL_URL">
            dashboard settings
          </PublicEnvToLinkConverter>{' '}
          and replace it.
        </p>
      ) : (
        <p>
          Replace <code>{'{YOUR_SECRET_KEY}'}</code> with your actual{' '}
          <a className="underline" href="/api/reference/authentication">
            secret key
          </a>
          , or{' '}
          <PublicEnvToLinkConverter env="NEXT_PUBLIC_REBILL_URL">
            log in
          </PublicEnvToLinkConverter>{' '}
          so that your sandbox secret key is automatically populated.
        </p>
      )}
    </>
  )
}

export default ApiKeyQuickstartNote
