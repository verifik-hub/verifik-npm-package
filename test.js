const verifik = require('./index')('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRJZCI6IjYxM2E4NWNlODIyY2NhY2E4ZTQwMWFmMCIsImRvY3VtZW50VHlwZSI6IkNDIiwiZG9jdW1lbnROdW1iZXIiOiIxMjM0NTY3ODkiLCJ2IjoxLCJyb2xlIjoiY2xpZW50IiwiZXhwaXJlc0F0IjoiMjAyMy0wMi0wNSAwNDo0Mzo0OSIsImlhdCI6MTY3Mjk4MDIyOX0.4vkTnv4JRb5KWjWF3SGbjjtM7r6rpf15KORh210hy7c');
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