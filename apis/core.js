const axios = require('axios');

let _axios = null;

let privateKey = null;

const setKey = (key) => {
    privateKey = key;
}

const getKey = () => {
    return privateKey;
}

const getAxiosInstance = () => {
    _axios = axios.create({
        baseURL: 'https://api.verifik.co',
    });

    _axios.defaults.headers.common['Content-Type'] = 'application/json';

    _axios.defaults.headers.common['Authorization'] = `JWT ${getKey()}`;

    return _axios;
}

module.exports = {
    url: 'https://api.verifik.co',
    setKey,
    getKey,
    getAxiosInstance,
};