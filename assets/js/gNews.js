import axios from 'axios';
const apiKey = "b76add237e2647d583cb2142e728a305";

export default axios.create({
  method: "get",
  baseURL: "https://newsapi.org/v2",
  params: {
    pageSize: 6
  },
  headers: {
    Authorization: apiKey
  }
});