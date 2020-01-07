import axios from 'axios';

const axiosApp = axios.create({
    baseURL: 'https://hw-65-aman-chermashev.firebaseio.com/pages/'
});

export default axiosApp;