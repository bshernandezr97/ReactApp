import { useFetch } from "../hooks/UseFetch";


export const GifService = async (category) => {

    const url = 'https://api.giphy.com/v1/gifs/search';
    const args = ['api_key', 'q', 'limit'];
    const values = ['3otHdTH4U7hjAREM1XpMuXO2MWYcQ9Vx', category, 10];
    const { data } = await useFetch(url, args, values);
    const dataMap = data.map(c => {return({
        id: c.id,
        title: c.title,
        url: c.images.original.url
    })});
    return dataMap;    
}
