import axios from "axios" 
import recommendData from '../mock/data/recommend.json'
import articleData from '../mock/data/article.json'

// homeApi 中直接導入 JSON 文件,直接返回 mock 數據

export const homeApi = { 
  getRecommend: async() => { 
    // 暫時在開發和生產環境都使用 mock 數據
    return { code: 200, data: recommendData }
  },
  getArticle: async() =>{
    // 暫時在開發和生產環境都使用 mock 數據
    return { code: 200, data: articleData }
  }
}