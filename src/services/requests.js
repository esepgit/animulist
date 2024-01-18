import axios from "axios";

const baseUrl = 'https://api.jikan.moe/v4/anime' 

const getAll = async () => {
  const response = await axios.get(`${baseUrl}?limit=8`);
  return response.data; 
}

export default { getAll }