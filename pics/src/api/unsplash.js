import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 252c964e842d0c64a49e0efb2a8e9da67f8b48f7d65ea3306ee888fd3df00955'
  }
});
