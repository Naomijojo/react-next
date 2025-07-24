"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import recommendData from '@/mock/data/recommend.json'

interface EventItem {
  id: number
  image: string
  title: string
  description: string
  location: string
  tag: string
  category: string
  time: number
  views?: number
  likes?: number
  avatarImg?: string // Added for orgInfo
  orgTitle?: string // Added for orgInfo
}

export default function EventPage() {
  const params = useParams() // 動態參數params
  const routeId = Number(params.id) // params轉換成數字
  const [eventData, setEventData] = useState<EventItem[]>([])
  const [event, setEvent] = useState<EventItem | null>(null) 
  const [loading, setLoading] = useState(true)

  const getEventData = async() => {
    // 模擬API調用
    setTimeout(() => {
      setEventData(recommendData)
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    getEventData()
  }, [])

  useEffect(() => {
    if (eventData.length > 0) {
      const detail = eventData.find(item => item.id === routeId)
      setEvent(detail || null)
    }
  }, [eventData, routeId])

  if (loading) {
    return (
      <div className="pt-[50px]">
        <div className="max-w-[1080px] mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-64 bg-gray-300 rounded-lg mb-4"></div>
            <div className="h-8 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!event) {
    return (
      <div className="pt-[50px]">
        <div className="max-w-[1080px] mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">活動不存在</h1>
            <p className="text-gray-600">找不到 ID 為 {routeId} 的活動</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-[50px]">
      <div className="max-w-[1080px] mx-auto px-4 py-8">

        {/* 活動圖 */}
        <div className="mb-6">
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <Image src={event.image} alt={event.title} fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1080px"
            />
          </div>
        </div>
        
        <div className="border border-solid border-gray-200 flex gap-6 bg-gray-100 rounded-lg pt-6 pb-8 pl-12">
          <div className="flex-1" style={{width: 'calc(100% - 300px)'}}>
            {/* 活動標題 */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{event.title}</h1>
              <div className="flex items-center gap-6 text-gray-600">
                {event.views && (
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-eye" style={{color:'#ccc'}}></i>
                    {event.views} 
                  </span>
                )}
                {event.likes && (
                  <span className="flex items-center gap-1">
                    <i className="fa-solid fa-heart" style={{color:'#ccc'}}></i>
                    {event.likes}
                  </span>
                )}
              </div>
            </div>

            {/* 活動描述 */}
            <div className="mb-6">
              <h1 className="text-xl font-bold leading-[48px] text-gray-800 mb-3">活動描述</h1>
              <div className="border border-solid border-gray-200 mt-7 py-6 px-10 rounded-lg">
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
              </div>
            </div>
          </div>

          {/* 大螢幕顯示orgInfo  */}
          <div className="w-[300px] hidden lg:block">
            <div className="mb-6">
              <h5 className="text-md font-bold leading-[48px] text-gray-800 mb-3">
                <div className="flex items-center gap-2 pl-10">
                  {event.avatarImg && (
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image src={event.avatarImg} alt={event.orgTitle || '組織頭像'} fill
                        className="object-contain"
                        sizes="48px"
                      />
                    </div>
                  )}
                  <span>{event.orgTitle}</span>
                </div>
              </h5>
              <div className=" mt-7 py-6 px-10 rounded-lg">
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md">立即報名</button>
              </div>
            </div>
          </div>
        </div>

        {/* 小螢幕底部固定按鈕 */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-blue-500 p-4 z-50">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {event.avatarImg && (
                  <div className="relative w-8 h-8 rounded-full">
                    <Image src={event.avatarImg} alt={event.orgTitle || 'avatarImg'} fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                )}
                <span className="text-white font-sm">{event.orgTitle}</span>
              </div>
              <button className="bg-white text-blue-500 px-6 py-2 rounded-md font-medium">
                立即報名
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
} 