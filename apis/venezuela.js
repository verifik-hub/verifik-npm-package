const core = require('./core');

const axios = core.getAxiosInstance();

const features = require('./venezuela_features_list');

const requestEndpoint = async (endpoint, params) => {
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

    const response = await axios.get(queryString);

    return response.data;
};

const getID = (documentType, documentNumber) => requestEndpoint('cedula', {
    documentType,
    documentNumber
});


module.exports = {
    getID,
    requestEndpoint,
};