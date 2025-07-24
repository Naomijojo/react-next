import axios from "axios" 
import recommendData from '../mock/data/recommend.json'
import articleData from '../mock/data/article.json'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '' : ''

// homeApi 中直接導入 JSON 文件,開發環境直接返回 mock 數據

export const homeApi = { 
  getRecommend: async() => { 
    if (process.env.NODE_ENV === 'development') {
      return { code: 200, data: recommendData }
    }
    const { data } = await axios.get('/mock/recommend')
    return data
  },
  getArticle: async() =>{
    if (process.env.NODE_ENV === 'development') {
      return { code: 200, data: articleData }
    }
    const { data } = await axios.get('/mock/article')
    return data
  }
}