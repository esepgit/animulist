import axios from "axios";

const baseUrl = 'https://api.jikan.moe/v4/anime' 

const getAll = async () => {
  const response = await axios.get(`${baseUrl}?q=&order_by=popularity&limit=20`);
  return response.data; 
}

export default { getAll }