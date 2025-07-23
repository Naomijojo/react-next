"use client"
import TabNav from '@/app/components/TabNav'
import BannerCard from '@/app/components/BannerCard'
import EventCard from '@/app/components/EventCard'

import { Carousel } from 'antd'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// 引入mock資料
import recommendData from '@/mock/data/recommend.json'

interface RecommendItem {
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
}

export default function Home() {
  const [bannerData, setBannerData] = useState<RecommendItem[]>([])
  const [eventData, setEventData] = useState<RecommendItem[]>([])
  const router = useRouter()

  useEffect(() => {
    // 使用mock資料
    const bannerItems = recommendData.filter(item => item.category === 'recommend').slice(0, 5)
    const eventItems = recommendData.filter(item => item.category === 'recommend').slice(0, 10)
    
    setBannerData(bannerItems)
    setEventData(eventItems)
  }, [])

  const handleBannerClick = (id: number) => {
    router.push(`/event/${id}`)
  }

  const handleEventClick = (id: number) => {
    router.push(`/event/${id}`)
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="pt-[80px] md:pt-[90px] lg:pt-[122px]">
        <TabNav />
        <div className="max-w-[1080px] mx-auto p-4 flex-1">

          {/* 輪播圖 */}
          <div className="relative cursor-pointer">
            <Carousel 
              autoplay={true} 
              arrows 
              dots
              className="mt-[10px] mb-[14px]"
              autoplaySpeed={5000}
            >
              {bannerData.map((item) => (
                <BannerCard
                  key={item.id} 
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  onGoToPage={() => handleBannerClick(item.id)}
                />
              ))}
            </Carousel>   
          </div>

          {/* 活動卡片 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">熱門推薦</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventData.map((item) => (
                <EventCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  time={item.time}
                  location={item.location}
                  tag={item.tag}
                  views={item.views}
                  likes={item.likes}
                  onGoToPage={() => handleEventClick(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
