import axios from 'axios';


export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    params: {
        maxResults: 50,
    },
    headers: {
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Key': '4167e78198msh3de15dc98c7ddfdp1d0a38jsnf3c492f1ba7b',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log("response data: ",data)
    return data;
};
