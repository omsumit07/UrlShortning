import axios from 'axios';
import constant from '../constant';
axios.defaults.baseURL = constant.apiUrl;

export const createShortUrl = (requestData,endPoint) => {
    return axios.post(endPoint,requestData);
}

export const saveVisitor = (endPoint) => {
    return axios.get(endPoint);
}

export const getVisitors = (endPoint) => {
    return axios.get(endPoint);
}