
import axios from "axios";

const http = axios.create({
  baseURL: 'https://news-at.zhihu.com/api/',
  timeout: 3000
});

http.interceptors.response.use(res=>{
  return res.data;
});

export default http;