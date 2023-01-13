const list = [{
    "baseCategory": "identity",
    "code": "venezuela_api_identity_lookup",
    "country": "Venezuela",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CCVE"
            ],
            "default": null,
            "min": null,
            "max": null
        },
        {
            "field": "documentNumber",
            "type": "String",
            "required": true,
            "enum": null,
            "default": null,
            "min": null,
            "max": null
        }
    ],
    "description": "Metodo para consultar el nombre de un ciudadano Venezolano",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "CONSULTAR NOMBRES VENEZUELA",
    "price": 0.019,
    "url": "v2/ve/consultarNombres"
}, {
    "baseCategory": "identity",
    "code": "venezuela_api_identity_lookup",
    "country": "Venezuela",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CCVE"
            ],
            "default": null,
            "min": null,
            "max": null
        },
        {
            "field": "documentNumber",
            "type": "String",
            "required": true,
            "enum": null,
            "default": null,
            "min": null,
            "max": null
        }
    ],
    "description": "Metodo para consultar el nombre de un ciudadano Venezolano",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "CONSULTAR NOMBRES VENEZUELA",
    "price": 0.019,
    "url": "v2/ve/cedula"
}];

const mapping = {};

for (let index = 0; index < list.length; index++) {
    const feature = list[index];

    const url = feature.url.split('v2/ve/')[1];

    mapping[url] = feature;
}

module.exports = {
    list,
    mapping,
};