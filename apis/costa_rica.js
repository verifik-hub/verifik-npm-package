const {
    requestEndpoint
} = require('./core');

const getID = (documentType, documentNumber) => requestEndpoint('cr/cedula', {
    documentType,
    documentNumber
});

module.exports = {
    getID,
};