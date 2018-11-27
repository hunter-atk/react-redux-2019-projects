import axios from 'axios';

const KEY = 'AIzaSyDrj9L8T-K3kckGU7oKpM-gaKm7MQlx_r8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
