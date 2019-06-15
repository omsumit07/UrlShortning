import axios from 'axios';
import constant from '../constant';
axios.defaults.baseURL = constant.apiUrl;

export const createShortUrl = (requestData,endPoint) => {
    return axios.post(endPoint,requestData);
}