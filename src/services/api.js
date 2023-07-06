import axios from 'axios'

const apiCodeBurguer = axios.create({
  baseURL: 'http://localhost:3001'
})

apiCodeBurguer.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiCodeBurguer
