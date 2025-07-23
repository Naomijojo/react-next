import Mock from 'mockjs'
import recommendData from './data/recommend.json'
import articleData from './data/article.json'
import tabsData from './data/tabs.json'

console.log('tabs資料:', tabsData)

// 只在客戶端運行
if (typeof window !== 'undefined') {
  
  try {
    Mock.mock('/mock/recommend', () => { 
      return { code: 200, data: recommendData } 
    })

    Mock.mock('/mock/article', () => { 
      return { code: 200, data: articleData } 
    })

    Mock.mock('/mock/tabs', () => { 
      return { code: 200, data: tabsData } 
    })

  } catch (error) {
    console.error('Mock 設置失敗:', error)
  }
} else {
  console.log('服務器端環境，跳過 Mock 設置')
}