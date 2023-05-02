const verifik = require('./index')('tokenHERE');


// get a colombian ID
// verifik.colombia.getID('CC', '123456789').then((response) => {
//     console.log({
//         colombia: response
//     });
// }, (error) => {
//     console.log({
//         error,
//         response: error.response?.data,
//     });
// })


// // get a venezuelan ID
// verifik.venezuela.getID('CCVE', '1648126').then((response) => {
//     console.log({
//         venezuela: response
//     });
// }, (error) => {
//     console.log({
//         error,
//         response: error.response?.data,
//     });
// })

// // get a panamanian ID
// verifik.panama.getID('CCPA', '1648126').then((response) => {
//     console.log({
//         panama: response
//     });
// }, (error) => {
//     console.log({
//         response: error.response?.data,
//     });
// })

// // get a panamanian ID
// verifik.peru.getID('DNI', '71272189').then((response) => {
//     console.log({
//         peru: response
//     });
// }, (error) => {
//     console.log({
//         error,
//         response: error.response?.data,
//     });
// })

// // chile document verification
// verifik.chile.getID('RUT', '5056163').then((response) => {
//     console.log({
//         chile: response
//     });
// }, (error) => {
//     console.log({
//         chileError: error.response?.data,
//     });
// })

// // Spain document verification
// verifik.spain.getID('NIE', '70923784H', '17/05/2024').then((response) => {
//     console.log({
//         spain: response
//     });
// }, (error) => {
//     console.log({
//         error,
//         spainError: error.response?.data,
//     });
// })

// Brazil document verification
verifik.brazil.getID('CPF', '07525638314', '22/01/2005').then((response) => {
    console.log({
        brazilID: response,
    });
}, (error) => {
    console.error({
        error,
        brazilError: error.response?.data,
    });
});
