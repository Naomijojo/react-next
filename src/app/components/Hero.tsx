import React from 'react'
import Image from 'next/image'

interface HeroProps {
  imgUrl: string
  alt: string
  content: string
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={props.imgUrl} alt={props.alt} fill style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500 opacity-50"></div>
      </div>
      <div className="flex justify-center items-center pt-48">
        <h1 className="text-white text-6xl">{props.content}</h1>
      </div>
    </div>
  )
}