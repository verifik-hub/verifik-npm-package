const {
    requestEndpoint,
} = require('./core');

const getID = (documentType, documentNumber, dateOfBirth) => requestEndpoint('br/cedula', {
    documentType,
    documentNumber,
    dateOfBirth,
});

const getBusiness = (documentType, documentNumber) => requestEndpoint('br/company', {
    documentType,
    documentNumber,
});

const getVehicle = (plate) => requestEndpoint('br/vehicle', {
    plate,
});


module.exports = {
    getBusiness,
    getID,
    getVehicle,
    requestEndpoint,
};