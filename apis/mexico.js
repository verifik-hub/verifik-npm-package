const {
    requestEndpoint
} = require('./core');

const getID = (documentType, documentNumber) => requestEndpoint('mx/curp', {
    documentType,
    documentNumber
});

const getVehicle = (plate) => requestEndpoint('mx/vehiculo/placa', {
    plate,
});

module.exports = {
    getID,
    getVehicle,
};