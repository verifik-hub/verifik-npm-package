const {
    requestEndpoint
} = require('./core');

const getID = (documentType, documentNumber, date) => requestEndpoint('es/cedula', {
    documentType,
    documentNumber,
    date,
});

module.exports = {
    getID,
};