const {
    requestEndpoint,
} = require('./core');

const getID = (documentType, documentNumber) => requestEndpoint('cl/cedula', {
    documentType,
    documentNumber
});

const getBusiness = (documentType, documentNumber) => requestEndpoint('cl/empresa', {
    documentType,
    documentNumber,
});

const getVehicle = (plate) => requestEndpoint('cl/vehiculo/placa', {
    plate,
});

getVehicleSOAT = (plate) => requestEndpoint('cl/vehiculo/soat', {
    plate,
});

module.exports = {
    getBusiness,
    getID,
    getVehicle,
    requestEndpoint,
};