"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Tab {
  id: number
  icon: string
  label: string
}

// 靜態數據
const tabs: Tab[] = [
  { id: 1, icon: 'icon-star', label: '精選' },
  { id: 2, icon: 'icon-learn', label: '學習' },
  { id: 3, icon: 'icon-art', label: '藝文' },
  { id: 4, icon: 'icon-experience', label: '體驗' }
]

export default function TabNav() {
  const [currentTab, setCurrentTab] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模擬加載延遲
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <nav className="fixed w-full h-[42px] lg:h-[72px] top-[50px] bg-white mb-[10px] z-10" style={{ boxShadow: '0 2px 15px #00000032' }}>
      <ul className="flex justify-between max-w-[1080px] mx-auto cursor-pointer">
        {loading ? (
          <li className="flex-1 text-center">
            <div className="block w-full my-2 lg:my-4 lg:py-2 text-center">
              <span className="text-[#b5bac1] text-sm lg:text-[16px]">載入中...</span>
            </div>
          </li>
        ) : (
          tabs.map((tab) => (
            <li key={tab.id} className="flex-1 text-center">
              <Link
                href="#"
                className={`block w-full my-2 lg:my-4 lg:py-2 text-sm lg:text-[16px] font-extrabold text-center transition-colors ${
                  currentTab === tab.id ? 'text-[#008bd0]' : 'text-[#b5bac1]'
                }`}
                onClick={() => setCurrentTab(tab.id)}
              >
                <span className={`inline-block w-5 h-5 align-middle transition-all duration-100 mr-2 ${tab.icon}`}></span>
                <span className="transition-all duration-100">
                  {tab.label}
                </span>
              </Link>
              <div className={`w-full h-1 transition-all duration-100 ${
                currentTab === tab.id ? 'bg-[#008bd0]' : ''
              }`}></div>
            </li>
          ))
        )}
      </ul>
    </nav>
  )
}
