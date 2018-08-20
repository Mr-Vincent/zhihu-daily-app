
import axios from "axios";

const http = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 3000
});

http.interceptors.response.use(res=>{
  return res.data;
});


http.fetch =function(url,callback) {
    http.get(url).then(res => {
      callback(res);
    });
}

export default http;