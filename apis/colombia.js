const {
    documentNumber
} = require('../../server/Core/JoiUtils');
const core = require('./core');

const axios = core.getAxiosInstance();

const getID = async (documentType, documentNumber) => {
    if (!documentType || !documentNumber) {
        throw new Error('Missing required fields: documentType | documentNumber');
    }

    const response = await axios.get(`/v2/co/cedula?documentType=${documentType}&documentNumber=${documentNumber}`);

    return response.data;
};

const getFullID = async (documentType, documentNumber, date) => {
    if (!documentType || !documentNumber || !date) {
        throw new Error('Missing required fields: documentType | documentNumber | date');
    }

    const response = await axios.get(`/v2/co/cedula/extra?documentType=${documentType}&documentNumber=${documentNumber}`);

    return response.data;
}

const getMilitarySituation = async (documentType, documentNumber) => {
    if (!documentType || !documentNumber) {
        throw new Error('Missing required fields: documentType | documentNumber');
    }

    const response = await axios.get(`/v2/co/situacion-militar?documentType=${documentType}&documentNumber=${documentNumber}`);

    return response.data;
}

const getAffiliations = async (documentType, documentNumber) => {
    if (!documentType || !documentNumber) {
        throw new Error('Missing required fields: documentType | documentNumber');
    }

    const response = await axios.get(`/v2/co/afiliaciones?documentType=${documentType}&documentNumber=${documentNumber}`);

    return response.data;
}

const getSENACertificates = async (documentType, documentNumber) => {
    if (!documentType || !documentNumber) {
        throw new Error('Missing required fields: documentType | documentNumber');
    }

    const response = await axios.get(`/v2/co/sena/certificados?documentType=${documentType}&documentNumber=${documentNumber}`);

    return response.data;
}

const getPoliceCriminalHistory = async (documentType, documentNumber) => {
    if (!documentType || !documentNumber) {
        throw new Error('Missing required fields: documentType | documentNumber');
    }

    const response = await axios.get(`/v2/co/policia/consultar?documentType=${documentType}&documentNumber=${documentNumber}`);

    return response.data;
}

const getAlturaCourses = async (documentType, documentNumber) => {
    if (!documentType || !documentNumber) {
        throw new Error('Missing required fields: documentType | documentNumber');
    }

    const response = await axios.get(`/v2/co/ministerio-de-trabajo/certificados?documentType=${documentType}&documentNumber=${documentNumber}`);

    return response.data;
}

const getContraloriaCertificates = async (documentType, documentNumber) => {
    if (!documentType || !documentNumber) {
        throw new Error('Missing required fields: documentType | documentNumber');
    }

    const response = await axios.get(`/v2/co/contraloria/certificado?documentType=${documentType}&documentNumber=${documentNumber}`);

    return response.data;
}

const getRegistraduriaCertificate = async (documentType, documentNumber, date) => {
    if (!documentType || !documentNumber || !date) {
        throw new Error('Missing required fields: documentType | documentNumber | date');
    }

    const response = await axios.get(`/v2/co/registraduria/certificado?documentType=${documentType}&documentNumber=${documentNumber}`);

    return response.data;
}

const getPollingPlace = async (documentType, documentNumber) => {
    if (!documentType || !documentNumber) {
        throw new Error('Missing required fields: documentType | documentNumber');
    }

    const response = await axios.get(`/v2/co/registraduria/votacion?documentType=${documentType}&documentNumber=${documentNumber}`);

    return response.data;
}

const getDelinquentDebtor = async (documentType, documentNumber) => {
    if (!documentType || !documentNumber) {
        throw new Error('Missing required fields: documentType | documentNumber');
    }

    const response = await axios.get(`/v2/co/deudoresmorosos?documentType=${documentType}&documentNumber=${documentNumber}`);

    return response.data;
}

const getRETHUS = async (documentType, documentNumber) => {
    if (!documentType || !documentNumber) {
        throw new Error('Missing required fields: documentType | documentNumber');
    }

    const response = await axios.get(`/v2/co/cedula/rethus?documentType=${documentType}&documentNumber=${documentNumber}`);

    return response.data;
}

module.exports = {
    getAffiliations,
    getAlturaCourses,
    getFullID,
    getID,
    getMilitarySituation,
    getSENACertificates,
    getPoliceCriminalHistory,
    getContraloriaCertificates,
    getRegistraduriaCertificate,
    getPollingPlace,
    getDelinquentDebtor,
    getRETHUS,
}