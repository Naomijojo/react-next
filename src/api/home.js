import recommendData from '../mock/data/recommend.json'
import articleData from '../mock/data/article.json'
import tabsData from '../mock/data/tabs.json'

export const homeApi = {
  getRecommend: async() => { 
    return { code: 200, data: recommendData }
  },
  getArticle: async() =>{
    return { code: 200, data: articleData }
  },
  getTabs: async() => {
    return { code: 200, data: tabsData }
  }
}