const list = [{
    "baseCategory": "identity",
    "code": "peru_identity_lookup",
    "country": "Peru",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "DNI"
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
    "description": "Metodo para consultar los nombres y apellidos de un ciudadano Peruano.",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "CONSULTAR PERSONA PERU",
    "price": 0.019,
    "url": "v2/pe/cedula"
}, {
    "baseCategory": "business",
    "code": "peru_api_company_lookup",
    "country": "Peru",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "RUC"
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
    "description": "Metodo encargado de consultar una empresa Peruana usando el RUC",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "EMPRESA PERU",
    "price": 0.019,
    "url": "v2/pe/empresa"
}, {
    "baseCategory": "transit",
    "code": "peru_api_vehicle",
    "country": "Peru",
    "dependencies": [{
        "field": "plate",
        "type": "String",
        "required": true,
        "enum": null,
        "default": null,
        "min": null,
        "max": null
    }],
    "description": "Metodo para consultar un vehículo usando como único parámetro la placa del mismo.",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "VEHICULO PERU",
    "price": 0.019,
    "url": "v2/pe/vehiculo/placa"
}, {
    "baseCategory": "transit",
    "code": "peru_api_vehicle_soat",
    "country": "Peru",
    "dependencies": [{
        "field": "plate",
        "type": "String",
        "required": true,
        "enum": null,
        "default": null,
        "min": null,
        "max": null
    }],
    "description": "Metodo para consultar el SOAT de un vehículo usando como único parámetro su placa.",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "SOAT PERU",
    "price": 0.019,
    "url": "v2/pe/vehiculo/soat"
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