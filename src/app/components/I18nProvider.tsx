"use client"

import { ReactNode, useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18next from '../../i18n'

interface I18nProviderProps {
  children: ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [isClient, setIsClient] = useState(false)
  const [i18nInstance, setI18nInstance] = useState<typeof i18next | null>(null)

  useEffect(() => {
    setIsClient(true)
    // 確保 i18n 在客戶端初始化
    if (typeof window !== 'undefined') {
      setI18nInstance(i18next)
    }
  }, [])

  if (!isClient || !i18nInstance) {
    return <>{children}</>
  }

  return (
    <I18nextProvider i18n={i18nInstance}>
      {children}
    </I18nextProvider>
  )
} 