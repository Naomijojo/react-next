'use client'
import React from 'react'
import Image from 'next/image'

interface BannerCardProps {
  image: string
  onGoToPage: () => void //父組件控制跳轉
}

const BannerCard = ({ image, onGoToPage }: BannerCardProps) => {
  return (
    <div className="banner-wrap relative overflow-hidden rounded-lg shadow-lg group w-full h-full cursor-pointer" onClick={onGoToPage}>
      <div className="relative w-full h-full">
        <Image 
          src={image} 
          alt="banner" 
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

export default BannerCard