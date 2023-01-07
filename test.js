const verifik = require('./index')('key_here');
// 

verifik.colombia.getID('CC', '123456789').then((response) => {
    console.log({
        response
    });
}, (error) => {
    console.log({
        error,
        response: error.response.data,
    });
})