import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search',
}

export default function Page() {
  return (
    <div className="pt-[50px]">
      <div className="max-w-[1080px] mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">搜尋活動</h1>
        <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="搜尋活動" />
        
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-lg font-semibold mb-2">搜尋歷史</h3>
          <p className="text-gray-600">熱門搜尋</p>
        </div>
      </div>
    </div>
  )
}