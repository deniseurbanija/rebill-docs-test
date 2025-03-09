'use client';
// UserContext.js
import React, { createContext, useState, useContext, useEffect } from 'react'
import { UserInfo } from './context'

const UserContext = createContext<UserInfo | null>(null)

export function useUserContext() {
  return useContext(UserContext)
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const response = await fetch('/api/userCookies')
        const userInfo: {response: UserInfo} = await response.json()
        setUserInfo(userInfo.response) 
      } catch (error) {
        console.error('fetchUserInfo', error)
      }
    }
    fetchUserInfo()
  }, [])

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  )
}
