import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 3000
});

// http.interceptors.response.use(res=>{
//   return res.data;
// });


http.fetch = function (url) {
  return new Promise((resolve, reject) => {
    http.get(url).then((res) => {
      if (!res || res.status != 200) {
        reject(res.data.message || '获取数据失败');
        return;
      }
      resolve(res.data);
    }).catch((error) => {
      reject('获取数据失败');
    })
  });
}

export default http;