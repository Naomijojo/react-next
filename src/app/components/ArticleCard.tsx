'use client'
import React from 'react'
import Image from 'next/image'

interface ArticleCardProps {
  image: string
  title: string
  onGoToPage: () => void //父組件控制跳轉
}

export default function ArticleCard({ image, title, onGoToPage }: ArticleCardProps) {

  const getArticleCardSize = () => {
    return `
      w-[256px] h-[320px]
      md:w-[400px] md:h-[500px]
      lg:w-[201px] lg:h-[265px]
    `
  }
  
  return (
    <div className={`flex-shrink-0 overflow-hidden rounded-lg ${getArticleCardSize} shadow-lg`} onClick={onGoToPage}>
      <div className="overflow-hidden rounded-t-lg transition-all duration-200 hover:scale-105">
        <Image 
          src={image} 
          alt={title}
          width={400}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex pt-2 pb-4 rounded-b-lg">
        <div className="w-full">
          <p className="text-center my-1 font-bold leading-5 min-h-[36px] overflow-hidden px-2 line-clamp-2 cursor-pointer">{title}</p>
        </div>
      </div>
    </div>
  )
}