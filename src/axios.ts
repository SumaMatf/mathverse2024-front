import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt-token');

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL + '/api';


export default axios;