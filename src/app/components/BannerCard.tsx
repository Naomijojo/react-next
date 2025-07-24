'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Carousel } from 'antd'
import { useRouter } from 'next/navigation'

import recommendData from '@/mock/data/recommend.json'

interface BannerItem {
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

interface BannerCardProps {
  image: string
  title?: string
  description?: string
  onGoToPage: () => void
}


const BannerCard = ({ image, title, onGoToPage }: BannerCardProps) => {
  return (
    <div className="banner-wrap relative overflow-hidden rounded-lg shadow-lg group w-full h-full cursor-pointer">
      <div className="relative w-full h-full">
        <Image 
          src={image} 
          alt={title || 'banner'} 
          onClick={onGoToPage}
          width={1080}
          height={300}
          className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* 漸層遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 "></div>
        
        {/* 點擊提示hover放大 */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          點擊查看詳情
        </div>
      </div>
    </div>
  )
}

// 新增 BannerCarousel 元件來處理輪播功能
export const BannerCarousel = () => {
  const [bannerData, setBannerData] = useState<BannerItem[]>([])
  const router = useRouter()

  useEffect(() => {
    const bannerItems = recommendData.filter(item => item.category === 'banner')
    setBannerData(bannerItems)
  }, [])

  const handleBannerClick = (id: number) => {
    router.push(`/event/${id}`)
  }

  return (
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
  )
}

export default BannerCard