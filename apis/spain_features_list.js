const list = [{
    "baseCategory": "identity",
    "code": "spain_api_identity_lookup",
    "country": "Spain",
    "description": "Método encargado de consultar nombres y apellidos de un ciudadano Español.",
    "feeType": "credits",
    "group": "apiRequest",
    "name": "NOMBRES ESPAÑA",
    "price": 0.019,
    "url": "v2/es/cedula",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "NIE",
                "DNIES"
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
        },
        {
            "field": "date",
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

console.log({
    mapping
});

module.exports = {
    list,
    mapping,
};