"use client"

import Link from 'next/link'
import { useTranslation } from '@/i18n/useTranslation'
import tabsData from '@/mock/data/tabs.json'

interface Tab {
  id: number
  icon: string
  label: string
}

export default function TabNav() {
  const { t } = useTranslation()

  return (
    <nav className="fixed w-full h-[42px] lg:h-[72px] top-[50px] bg-white mb-[10px] z-10" style={{ boxShadow: '0 2px 15px #00000032' }}>
      <ul className="flex justify-between max-w-[1080px] mx-auto cursor-pointer">
        {tabsData.map((tab: Tab) => (
            <li key={tab.id} className="flex-1 text-center">
              <Link
                href="#"
              className="block w-full my-2 lg:my-4 lg:py-2 text-sm lg:text-[16px] font-extrabold text-center transition-colors text-[#b5bac1] hover:text-[#008bd0]"
              >
                <span className={`inline-block w-5 h-5 align-middle transition-all duration-100 mr-2 ${tab.icon}`}></span>
                <span className="transition-all duration-100">
                {t(tab.label)}
                </span>
              </Link>
            </li>
        ))}
      </ul>
    </nav>
  )
}
