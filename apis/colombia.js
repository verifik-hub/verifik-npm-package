const core = require('./core');

const axios = core.getAxiosInstance();

const features = require('./colombia_features_list');

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

const getAffiliations = (documentType, documentNumber) => requestEndpoint('afiliaciones', {
    documentType,
    documentNumber
});

const getAlturaCourses = (documentType, documentNumber) => requestEndpoint('ministerio-de-trabajo/certificados', {
    documentType,
    documentNumber
});

const getCompany = (documentType, documentNumber) => requestEndpoint('company/dian', {
    documentType,
    documentNumber,
});

const getDriver = (documentType, documentNumber) => requestEndpoint('runt/conductor', {
    documentType,
    documentNumber,
})

const getID = (documentType, documentNumber) => requestEndpoint('cedula', {
    documentType,
    documentNumber
});

const getFullID = (documentType, documentNumber, date) => requestEndpoint('cedula/extra', {
    documentType,
    documentNumber,
    date
});

const getMilitarySituation = (documentType, documentNumber) => requestEndpoint('situacion-militar', {
    documentType,
    documentNumber
});

const getSENACertificates = (documentType, documentNumber) => requestEndpoint('sena/certificados', {
    documentType,
    documentNumber
});

const getPoliceCriminalHistory = (documentType, documentNumber) => requestEndpoint('policia/consultar', {
    documentType,
    documentNumber
});

const getProcuraduriaCriminalHistory = (documentType, documentNumber) => requestEndpoint('procuraduria/antecedentes', {
    documentType,
    documentNumber
});

const getContraloriaCertificates = (documentType, documentNumber) => requestEndpoint('contraloria/certificado', {
    documentType,
    documentNumber
});

const getRegistraduriaCertificate = (documentType, documentNumber, date) => requestEndpoint('registraduria/certificado', {
    documentType,
    documentNumber,
    date
});

const getPollingPlace = (documentType, documentNumber) => requestEndpoint('lugar-de-votacion', {
    documentType,
    documentNumber
});

const getDelinquentDebtor = (documentType, documentNumber) => requestEndpoint('deudoresmorosos', {
    documentType,
    documentNumber
});

const getRETHUS = (documentType, documentNumber) => requestEndpoint('cedula/rethus', {
    documentType,
    documentNumber
});

const getVehicle = (documentType, documentNumber, plate) => requestEndpoint('runt/vehiculo', {
    documentType,
    documentNumber,
    plate,
})

const getVehicleOwner = (plate) => requestEndpoint('runt/propietarios', {
    plate,
});

const getVehicleDetails = (plate) => requestEndpoint('runt/vehiculo-completo', {
    plate,
});

const getRUES = (documentType, documentNumber) => requestEndpoint('rues', {
    documentType,
    documentNumber,
});

const getRAMAProcesses = (documentType, documentNumber) => requestEndpoint('rama/procesos', {
    documentType,
    documentNumber,
});

const getRAMAProcessDetails = (processNumber) => requestEndpoint('rama/proceso', {
    processNumber,
});

const getPeakAndPlate = (plate) => requestEndpoint('vehiculo/pico-y-placa', {
    plate,
});

const getSIMIT = (documentType, documentNumber) => requestEndpoint('simit/consultar', {
    documentType,
    documentNumber,
});

const getSIMITSuspensions = (documentType, documentNumber) => requestEndpoint('simit/suspensiones', {
    documentType,
    documentNumber,
});

const getSIMITAgreements = (documentType, documentNumber) => requestEndpoint('simit/acuerdos', {
    documentType,
    documentNumber,
});

const getSIMITResolutions = (documentType, documentNumber) => requestEndpoint('simit/resoluciones', {
    documentType,
    documentNumber,
});

const getSIMITSubpoenas = (documentType, documentNumber) => requestEndpoint('simit/comparendos', {
    documentType,
    documentNumber,
});

module.exports = {
    getAffiliations,
    getAlturaCourses,
    getContraloriaCertificates,
    getCompany,
    getDelinquentDebtor,
    getDriver,
    getFullID,
    getID,
    getMilitarySituation,
    getSIMIT,
    getSIMITSuspensions,
    getSIMITAgreements,
    getSIMITResolutions,
    getSIMITSubpoenas,
    getSENACertificates,
    getPoliceCriminalHistory,
    getProcuraduriaCriminalHistory,
    getRegistraduriaCertificate,
    getPeakAndPlate,
    getPollingPlace,
    getVehicle,
    getVehicleOwner,
    getVehicleDetails,
    getRAMAProcesses,
    getRAMAProcessDetails,
    getRETHUS,
    getRUES,
    requestEndpoint,
}