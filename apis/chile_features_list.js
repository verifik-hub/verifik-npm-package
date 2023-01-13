const list = [{
    "baseCategory": "identity",
    "code": "chile_api_identity_lookup",
    "country": "Chile",
    "description": "Método encargado de consultar nombres y apellidos de un ciudadano Chileno.",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "NOMBRES CHILE",
    "price": 0.019,
    "url": "v2/cl/cedula",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "RUT"
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
    ]
}, {
    "baseCategory": "business",
    "code": "chile_api_business_lookup",
    "country": "Chile",
    "description": "Método encargado de consultar informacion de una empresa Chilena.",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "EMPRESA CHILE",
    "price": 0.019,
    "url": "v2/cl/empresa",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "RUT"
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
    ]
}, {
    "baseCategory": "transit",
    "code": "chile_api_vehicle",
    "country": "Chile",
    "description": "Método encargado de consultar informacion de un vehiculo Chileno.",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "VEHICULO CHILE",
    "price": 0.019,
    "url": "v2/cl/vehiculo/placa",
    "dependencies": [{
        "field": "plate",
        "type": "String",
        "required": true,
        "enum": null,
        "default": null,
        "min": null,
        "max": null
    }]
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