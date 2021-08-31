import  axios from axios
const axiosClient = axios.create({
    baseUrl: 'http://duanpoly.ml/laravel/public/api/v1/posts/3',
    headers:{  'content-type':'application/json'}
});
export default axiosClient;
