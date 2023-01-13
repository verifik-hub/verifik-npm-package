const list = [{
    "baseCategory": "identity",
    "code": "mexico_identity_lookup",
    "country": "Mexico",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CURP"
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
    "description": "Método para consultar tanto nombres como información de nacimiento de un ciudadano Mexicano a través del documento CURP (clave única del registro público).",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "CONSULTAR PERSONA MEXICO",
    "price": 0.036,
    "url": "v2/mx/curp"
}, {
    "baseCategory": "transit",
    "code": "mexico_api_vehicle",
    "country": "Mexico",
    "dependencies": [{
        "field": "plate",
        "type": "String",
        "required": true,
        "enum": null,
        "default": null,
        "min": null,
        "max": null
    }],
    "description": "Metodo encargado de consultar un vehiculo mexicano",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "VEHICULO MEXICO",
    "price": 0.019,
    "url": "v2/mx/vehiculo/placa"
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