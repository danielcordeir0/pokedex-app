import useSWR from "swr"
import axios from "axios"
 const api = axios.create();

const fetcher = (url: string) => api.get(url).then((res) => res.data)

const useFetch = () => {
  const {data, isLoading} = useSWR('pokemons',()=>fetcher('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'), {
    refreshInterval: 3000
  });
  return {data,isLoading};
};

export default useFetch;
