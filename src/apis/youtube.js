import axios from 'axios'; 

const KEY = 'AIzaSyAO7SFFTZeBMBxoqi3ZKTY7Wv3_dUdJYK8'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video', 
        maxResults: 5,
        key: KEY
    }
});

