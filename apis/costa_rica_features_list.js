const list = [{
    "baseCategory": "identity",
    "code": "costarica_api_identity_lookup",
    "country": "Costa Rica",
    "description": "Método encargado de consultar nombres y apellidos de un ciudadano de Costa Rica.",
    "feeType": "hybrid",
    "group": "apiRequest",
    "name": "NOMBRES COSTA RICA",
    "price": 0.019,
    "url": "v2/cr/cedula",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CCCR"
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