const {
    requestEndpoint,
} = require('./core');


const getAffiliations = (documentType, documentNumber) => requestEndpoint('co/afiliaciones', {
    documentType,
    documentNumber
});

const getAlturaCourses = (documentType, documentNumber) => requestEndpoint('co/ministerio-de-trabajo/certificados', {
    documentType,
    documentNumber
});

const getCompany = (documentType, documentNumber) => requestEndpoint('co/company/dian', {
    documentType,
    documentNumber,
});

const getDriver = (documentType, documentNumber) => requestEndpoint('co/runt/conductor', {
    documentType,
    documentNumber,
})

const getID = (documentType, documentNumber) => requestEndpoint('co/cedula', {
    documentType,
    documentNumber
});

const getFullID = (documentType, documentNumber, date) => requestEndpoint('co/cedula/extra', {
    documentType,
    documentNumber,
    date
});

const getMilitarySituation = (documentType, documentNumber) => requestEndpoint('co/situacion-militar', {
    documentType,
    documentNumber
});

const getSENACertificates = (documentType, documentNumber) => requestEndpoint('co/sena/certificados', {
    documentType,
    documentNumber
});

const getPoliceCriminalHistory = (documentType, documentNumber) => requestEndpoint('co/policia/consultar', {
    documentType,
    documentNumber
});

const getProcuraduriaCriminalHistory = (documentType, documentNumber) => requestEndpoint('co/procuraduria/antecedentes', {
    documentType,
    documentNumber
});

const getContraloriaCertificates = (documentType, documentNumber) => requestEndpoint('co/contraloria/certificado', {
    documentType,
    documentNumber
});

const getRegistraduriaCertificate = (documentType, documentNumber, date) => requestEndpoint('co/registraduria/certificado', {
    documentType,
    documentNumber,
    date
});

const getPollingPlace = (documentType, documentNumber) => requestEndpoint('co/lugar-de-votacion', {
    documentType,
    documentNumber
});

const getDelinquentDebtor = (documentType, documentNumber) => requestEndpoint('co/deudoresmorosos', {
    documentType,
    documentNumber
});

const getRETHUS = (documentType, documentNumber) => requestEndpoint('co/cedula/rethus', {
    documentType,
    documentNumber
});

const getVehicle = (documentType, documentNumber, plate) => requestEndpoint('co/runt/vehiculo', {
    documentType,
    documentNumber,
    plate,
})

const getVehicleOwner = (plate) => requestEndpoint('co/runt/propietarios', {
    plate,
});

const getVehicleDetails = (plate) => requestEndpoint('co/runt/vehiculo-completo', {
    plate,
});

const getRUES = (documentType, documentNumber) => requestEndpoint('co/rues', {
    documentType,
    documentNumber,
});

const getRAMAProcesses = (documentType, documentNumber) => requestEndpoint('co/rama/procesos', {
    documentType,
    documentNumber,
});

const getRAMAProcessDetails = (processNumber) => requestEndpoint('co/rama/proceso', {
    processNumber,
});

const getPeakAndPlate = (plate) => requestEndpoint('co/vehiculo/pico-y-placa', {
    plate,
});

const getSIMIT = (documentType, documentNumber) => requestEndpoint('co/simit/consultar', {
    documentType,
    documentNumber,
});

const getSIMITSuspensions = (documentType, documentNumber) => requestEndpoint('co/simit/suspensiones', {
    documentType,
    documentNumber,
});

const getSIMITAgreements = (documentType, documentNumber) => requestEndpoint('co/simit/acuerdos', {
    documentType,
    documentNumber,
});

const getSIMITResolutions = (documentType, documentNumber) => requestEndpoint('co/simit/resoluciones', {
    documentType,
    documentNumber,
});

const getSIMITSubpoenas = (documentType, documentNumber) => requestEndpoint('co/simit/comparendos', {
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
}