import axios from "axios" 

// 設置 axios 默認配置
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '' : ''

export const homeApi = {
  getRecommend: async () => {
    try {
      const { data } = await axios.get('/mock/recommend') // mockjs攔截
      console.log('getRecommend:', data)
      return data
    } catch (err) {
      console.error('homeApi getRecommend 請求失敗:', err)
      throw err
    }
  },
  getTabs: async () => {
    try {
      const { data } = await axios.get('/mock/tabs')
      console.log('getTabs:', data)
      return data
    } catch (err) {
      console.error('homeApi getTabs 請求失敗:', err)
      throw err
    }
  },
}