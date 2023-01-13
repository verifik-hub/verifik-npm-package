const {
    requestEndpoint
} = require('./core');

const getID = (documentType, documentNumber) => requestEndpoint('ve/cedula', {
    documentType,
    documentNumber
});

module.exports = {
    getID,
    requestEndpoint,
};