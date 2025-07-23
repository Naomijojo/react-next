"use client"

import { useEffect, useState } from 'react'

export default function MockProvider() {
  const [isMockLoaded, setIsMockLoaded] = useState(false)

  useEffect(() => {
    // 只在開發環境加載 Mock 配置
    if (process.env.NODE_ENV === 'development') {
      import('../../mock').then(() => {
        setIsMockLoaded(true)
      }).catch( err => {
        console.error('Mock 配置失敗:', err)
        setIsMockLoaded(true) 
      })
    } else {
      setIsMockLoaded(true)
    }
  }, [])

  // 在 mock 加載完成之前不渲染子組件
  if (!isMockLoaded) {
    return <div>Mock Loading...</div>
  }

  return null
} 