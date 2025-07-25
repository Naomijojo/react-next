// 首頁
"use client"
import TabNav from '../components/TabNav'
import EventCard from '../components/EventCard'
import ArticleCard from '../components/ArticleCard'
import BannerCard from '../components/BannerCard'

import { Carousel } from 'antd'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { homeApi } from '@/api/home'

// 型別定義
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

interface ArticleItem {
  id: number
  image: string
  title: string
  category: string
}

export default function Home() {
  const [recommendData, setRecommendData] = useState<RecommendItem[]>([])
  const [articleData, setArticleData] = useState<ArticleItem[]>([])
  const router = useRouter()

  const getRecommendData = async() => {
    const response = await homeApi.getRecommend()
    setRecommendData(response.data)
  }

  const getArticleData = async() => {
    const response = await homeApi.getArticle()
    setArticleData(response.data)
  }

  useEffect(() => {
    getRecommendData()
    getArticleData()
  }, [])

  const handleEventClick = (id: number) => {
    router.push(`/event/${id}`)
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="pt-[80px] md:pt-[90px] lg:pt-[122px]">
        <TabNav />
        <div className="max-w-[1080px] mx-auto p-4 flex-1">

          {/* 輪播圖 */}
          <Carousel autoplay={true} arrows className="mt-[10px] mb-[14px]">
            {recommendData.filter(item => item.category === 'banner').map((item) =>(
              <BannerCard
                key={item.id} 
                image={item.image}
                onGoToPage={() => handleEventClick(item.id)}
              />
            ))}
          </Carousel>

          {/* 大活動卡片 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">熱門推薦</h2>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 flex overflow-x-auto gap-4 pb-4 md:pb-0">
              {recommendData.filter(item => item.category === 'recommend').map((item) => (
                <EventCard
                  key={item.id} 
                  image={item.image}
                  time={item.time}
                  title={item.title}
                  location={item.location}
                  tag={item.tag}
                  views={item.views}
                  likes={item.likes}
                  onGoToPage={() => handleEventClick(item.id)}
                />
              ))}
            </div>
          </div>

          {/* 小活動卡片 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">每天一點新鮮事</h2>
            <div className="flex overflow-x-auto gap-4 pb-4 lg:flex-row lg:gap-6 lg:overflow-hodden lg:pb-0 scrollbar-hide">
              {articleData.filter(item => item.category === 'news-1').map((item) => (
                <ArticleCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  onGoToPage={() => handleEventClick(item.id)}
                />
              ))}
            </div>
          </div>
          
          {/* 大活動卡片 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">熱門推薦</h2>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 flex overflow-x-auto gap-4 pb-4 md:pb-0">
              {recommendData.filter(item => item.category === 'featured-1').map((item) => (
                <EventCard
                  key={item.id} 
                  image={item.image}
                  time={item.time}
                  title={item.title}
                  location={item.location}
                  tag={item.tag}
                  views={item.views}
                  likes={item.likes}
                  onGoToPage={() => handleEventClick(item.id)}
                />
              ))}
            </div>
          </div>

          {/* 小活動卡片 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">每天一點新鮮事</h2>
            <div className="flex overflow-x-auto gap-4 pb-4 lg:flex-row lg:gap-6 lg:overflow-hodden lg:pb-0 scrollbar-hide">
              {articleData.filter(item => item.category === 'news-2').map((item) => (
                <ArticleCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  onGoToPage={() => handleEventClick(item.id)}
                />
              ))}
            </div>
          </div>

          {/* 大活動卡片 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">熱門推薦</h2>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 flex overflow-x-auto gap-4 pb-4 md:pb-0">
              {recommendData.filter(item => item.category === 'featured-2').map((item) => (
                <EventCard
                  key={item.id} 
                  image={item.image}
                  time={item.time}
                  title={item.title}
                  location={item.location}
                  tag={item.tag}
                  views={item.views}
                  likes={item.likes}
                  onGoToPage={() => handleEventClick(item.id)}
                />
              ))}
            </div>
          </div>

          {/* 小活動卡片 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">每天一點新鮮事</h2>
            <div className="flex overflow-x-auto gap-4 pb-4 lg:flex-row lg:gap-6 lg:overflow-hodden lg:pb-0 scrollbar-hide">
              {articleData.filter(item => item.category === 'news-3').map((item) => (
                <ArticleCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  onGoToPage={() => handleEventClick(item.id)}
                />
              ))}
            </div>
          </div>

          {/* 大活動卡片 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">熱門推薦</h2>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 flex overflow-x-auto gap-4 pb-4 md:pb-0">
              {recommendData.filter(item => item.category === 'featured-3').map((item) => (
                <EventCard
                  key={item.id} 
                  image={item.image}
                  time={item.time}
                  title={item.title}
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
