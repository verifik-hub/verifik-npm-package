const list = [{
    "baseCategory": "identity",
    "code": "panama_api_identity_lookup",
    "country": "Panama",
    "description": "Método encargado de consultar los nombres y apellidos de un ciudadano Panameño.",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "NOMBRES PANAMA",
    "price": 0.019,
    "url": "v2/pa/cedula",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CCPA"
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
    "baseCategory": "identity",
    "code": "panama_api_identity_full_lookup",
    "country": "Panama",
    "description": "Método encargado de consultar los nombres y apellidos de un ciudadano Panameño, asi como informacion extra.",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "NOMBRES PANAMA EXTRA",
    "price": 0.019,
    "url": "v2/pa/cedula/extra",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CCPA"
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
    "code": "panama_api_vehicle",
    "country": "Panama",
    "description": "Método encargado de consultar vehiculos en Panama.",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "VEHICULO PANAMA",
    "price": 0.019,
    "url": "v2/pa/vehiculo/placa",
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