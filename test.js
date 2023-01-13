const verifik = require('./index')('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRJZCI6IjYxM2E4NWNlODIyY2NhY2E4ZTQwMWFmMCIsImRvY3VtZW50VHlwZSI6IkNDIiwiZG9jdW1lbnROdW1iZXIiOiIxMjM0NTY3ODkiLCJ2IjoxLCJyb2xlIjoiY2xpZW50Iiwic3Vic2NyaXB0aW9uUGxhbiI6IjYxM2E4NWNlYmU2M2FmY2M2ZjUxYmQ1NyIsIkpXVFBocmFzZSI6Ik0xMTIiLCJleHBpcmVzQXQiOiIyMDIzLTAyLTEyIDA0OjExOjA2IiwiaWF0IjoxNjczNTgzMDY2fQ.EJgLMFX8TW5mU39eUNZqTNXaIrSo_HbT3loGkyYx9Lo');

verifik.colombia.getID('CC', '123456789').then((response) => {
    console.log({
        response
    });
}, (error) => {
    console.log({
        error,
        response: error.response?.data,
    });
})

verifik.requestEndpoint('co/cedula', {
    documentType: 'CC',
    documentNumber: '123456789',
}).then((endpointData) => {
    console.log({
        endpointData,
    });
}, (error) => {
    console.log({
        error,
        response: error.response?.data,
    });
})