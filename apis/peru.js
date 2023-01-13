const {
    requestEndpoint,
} = require('./core');

const getID = (documentType, documentNumber) => requestEndpoint('pe/cedula', {
    documentType,
    documentNumber
});

const getBusiness = (documentType, documentNumber) => requestEndpoint('pe/empresa', {
    documentType,
    documentNumber,
});

const getVehicle = (plate) => requestEndpoint('pe/vehiculo/placa', {
    plate,
});

getVehicleSOAT = (plate) => requestEndpoint('pe/vehiculo/soat', {
    plate,
});

module.exports = {
    getBusiness,
    getID,
    getVehicle,
};