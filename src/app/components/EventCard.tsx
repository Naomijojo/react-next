'use client'
import React from 'react'
import Image from 'next/image'
import { formatDate } from '@/utils/time'
import { useRouter } from 'next/navigation'

interface EventCardProps {
  id: number
  image: string
  title: string
  time: number
  location: string
  tag: string
  views?: number
  likes?: number
  onGoToPage?: () => void
}

export default function EventCard({ id, image, title, time, location, tag, views, likes, onGoToPage }: EventCardProps) {
  const router = useRouter()
  const isOnlineEvent = location === "線上活動";
  
  const handleGoToPage = () => {
    if (onGoToPage) {
      onGoToPage()
    } else {
      router.push(`/event/${id}`)
    }
  }


  return (
    <div className="card md:block flex-shrink-0 w-[280px] md:w-auto">
      <div className="card-image md:block flex-shrink-0 w-full md:w-auto" onClick={handleGoToPage}>
        <Image src={image} alt={title} width={300} height={200} className="w-full h-[80px] md:h-auto object-contain rounded-lg" />
      </div>
      <div className="card-event-content flex flex-col md:block flex-1 ml-3 md:ml-0">
        <p className="card-event-time text-sm text-gray-500 font-medium">{formatDate(time)}</p>
        <p className="card-event-name text-lg font-semibold text-gray-800 overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer hover:text-blue-600 transition-colors" onClick={handleGoToPage}>{title}</p>
        <div className="flex items-center">
          <div className="card-event-location flex items-center">
            <i className="fa-solid fa-location-dot mr-1"></i>
            <span>{isOnlineEvent ? "線上活動" : location}</span>
          </div>
        </div>
        <div className="tags-container flex items-center justify-between">
          <span className="tags text-gray-400">#{tag}</span>
          
          {views !== undefined && likes !== undefined && (
            <div className="tags-counts flex">
              <span className='flex'>
                <Image src="/images/icon-event-card-view.svg" alt="views" width={19} height={19} className='mx-1'/> {views}
              </span>
              <span className='flex'>
                <Image src="/images/icon-event-card-heart.svg" alt='likes' width={19} height={19} className='mx-1' /> {likes}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
