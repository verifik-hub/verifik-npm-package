const axios = require('axios');

let _axios = null;

let privateKey = null;

const chile = require('./chile_features_list');
const colombia = require('./colombia_features_list');
const costaRica = require('./costa_rica_features_list');
const mexico = require('./mexico_features_list');
const panama = require('./panama_features_list');
const peru = require('./peru_features_list');
const venezuela = require('./venezuela_features_list');

const features = {
    list: [],
    mapping: {
        ...chile.mapping,
        ...colombia.mapping,
        ...costaRica.mapping,
        ...mexico.mapping,
        ...panama.mapping,
        ...peru.mapping,
        ...venezuela.mapping,
    },
}

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

/**
 * request Endpoint
 * @param {String} endpoint
 * @param {Object} params
 * @returns mixed
 */
const requestEndpoint = async (endpoint, params) => {
    const _axios = getAxiosInstance();
    
    const feature = features.mapping[endpoint];

    for (const dependency of feature.dependencies) {
        if (dependency.required && !params[dependency.field]) {
            throw new Error(`Missing required field: ${dependency.field}`);
        }

        if (dependency.enum && !dependency.enum.includes(params[dependency.field])) {
            throw new Error(`Invalid value for field ${dependency.field}: ${params[dependency.field]}`);
        }
    }

    let queryString = `/${feature.url}?`;

    for (const param in params) {
        queryString += `${param}=${params[param]}&`;
    }

    const response = await _axios.get(queryString);

    return response.data;
};

module.exports = {
    url: 'https://api.verifik.co',
    setKey,
    getKey,
    getAxiosInstance,
    requestEndpoint,
};