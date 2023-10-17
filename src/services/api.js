import axios from "axios";
//BASE DA URL: https://api.themoviedb.org/3/

//  URL DA API: /movie/now_playing?api_key=ebb664d477d95ead2719ebbedb8746ea&language=pt-br


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
