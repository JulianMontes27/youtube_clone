import axios from 'axios';

const BASE_URL= 'https://youtube-v31.p.rapidapi.com/search';

const options = {
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '2cf09d54eemshf3a0e1a3b7646adp1e5921jsn9a249a851567',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };