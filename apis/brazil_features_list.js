const list = [{
    "feeType": "hybrid",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CPF"
            ],
        },
        {
            "field": "documentNumber",
            "type": "String",
            "required": true,
            "enum": null,
        },
        {
            "field": "dateOfBirth",
            "type": "String",
            "required": true,
        },
    ],
    "country": "Brazil",
    "baseCategory": "identity",
    "code": "brasil_api_identity_lookup",
    "description": "Método para obtener los nombres y apellidos completos de un ciudadano Brasileño.",
    "group": "apiRequest",
    "name": "CONSULTAR PERSONA BRAZIL",
    "price": 0.2,
    "url": "v2/br/cedula"
}, {
    "feeType": "hybrid",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CNPJ"
            ],
        },
        {
            "field": "documentNumber",
            "type": "String",
            "required": true,
            "enum": null,
        }
    ],
    "country": "Brazil",
    "baseCategory": "business",
    "code": "brasil_api_company_lookup",
    "description": "Método para obtener datos de una empresa Brasileña.",
    "group": "apiRequest",
    "name": "CONSULTAR EMPRESA DE BRAZIL",
    "price": 0.2,
    "url": "v2/br/company"
}, {
    "feeType": "hybrid",
    "dependencies": [{
        "field": "plate",
        "type": "String",
        "required": true,
        "default": null
    }],
    "country": "Brazil",
    "baseCategory": "identity",
    "code": "brasil_api_vehicle",
    "description": "Método para obtener la información básica de un vehículo de Brasil",
    "group": "apiRequest",
    "name": "CONSULTAR VEHÍCULO BRAZIL",
    "price": 0.2,
    "url": "v2/br/vehicle"
}];

const mapping = {};

for (let index = 0; index < list.length; index++) {
    const feature = list[index];

    const url = feature.url.split('v2/')[1];

    mapping[url] = feature;
}

module.exports = {
    list,
    mapping,
};