const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-kv5fpTS1tJjQrK3acWzUv4L1";

const getCoinList = (page, curency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${curency}&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;
};

const searchCoin = (query) => {
  return `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;
};
const chartcoin=(id)=>{
  return `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7`
}

export { getCoinList, searchCoin,chartcoin };
