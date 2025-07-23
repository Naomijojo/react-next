import React from 'react'
import Image from 'next/image'

interface BannerCardProps {
  image: string
  title?: string
  description?: string
  onGoToPage: () => void
}

const BannerCard = ({ image, title, onGoToPage }: BannerCardProps) => {
  return (
    <div className="banner-wrap relative overflow-hidden rounded-lg shadow-lg group">
      <div className="relative">
        <Image 
          src={image} 
          alt={title || 'banner'} 
          onClick={onGoToPage}
          width={1080}
          height={540}
          className="w-full h-[300px] md:h-[560px] object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
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