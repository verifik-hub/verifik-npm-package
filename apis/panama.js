const {
    requestEndpoint,
} = require('./core');

/**
 * get a Panamanian ID
 * @param {String} documentType
 * @param {String} documentNumber
 * @returns Promise
 */
const getID = (documentType, documentNumber) => requestEndpoint('pa/cedula', {
    documentType,
    documentNumber
});

/**
 * get Full Panamanian ID 
 * @param {String} documentType
 * @param {String} documentNumber
 * @returns Promise
 */
const getFullID = (documentType, documentNumber) => requestEndpoint('pa/cedula/extra', {
    documentType,
    documentNumber,
});

/**
 * 
 * @param {String} plate
 * @returns Promise
 */
const getVehicle = (plate) => requestEndpoint('pa/vehiculo/placa', {
    plate,
});

module.exports = {
    getID,
    getFullID,
    getVehicle,
    requestEndpoint,
};