const list = [{
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "TI",
                "CE",
                "PA",
                "RC",
                "PEP"
            ],
            "default": null,
            "min": null,
            "max": null
        },
        {
            "field": "documentNumber",
            "type": "String",
            "required": true,
            "default": "",
            "min": "",
            "max": ""
        }
    ],
    "name": "SENA",
    "price": 0.019,
    "url": "v2/co/sena/certificados"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "PA",
                "TI",
                "PEP"
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
    ],
    "name": "AFILIACIONES",
    "price": 0.019,
    "url": "v2/co/afiliaciones"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "PEP"
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
    "name": "CONSULTAR PERSONA COLOMBIA",
    "price": 0.019,
    "url": "v2/co/cedula"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "TI"
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
    "name": "POLICIA",
    "price": 0.019,
    "url": "v2/co/policia/consultar"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "TI"
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
    "name": "CURSO DE ALTURAS",
    "price": 0.019,
    "url": "v2/co/ministerio-de-trabajo/certificados"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "TI",
                "PA",
                "PEP"
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
    "name": "CONTRALORIA",
    "price": 0.019,
    "url": "v2/co/contraloria/certificado"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC"
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
    ],
    "name": "CERTIFICADO DE VIGENCIA DE CEDULA",
    "price": 0.019,
    "url": "v2/co/registraduria/certificado"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC"
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
    "name": "LUGAR DE VOTACION",
    "price": 0.019,
    "url": "v2/co/registraduria/votacion"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "TI",
                "NIT",
                "CE"
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
    "name": "DEUDORES MOROSOS DEL ESTADO",
    "price": 0.019,
    "url": "v2/co/deudoresmorosos"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "TI"
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
    "name": "SITUACION MILITAR",
    "price": 0.019,
    "url": "v2/co/situacion-militar"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC"
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
    "name": "INFORMACION COMPLETO",
    "price": 0.5,
    "url": "v2/co/cedula/completo"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC"
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
    "name": "RETHUS",
    "price": 0.019,
    "url": "v2/co/cedula/rethus"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "NIT"
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
    "name": "CONSULTA EMPRESA",
    "price": 0.019,
    "url": "v2/co/rues"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "NIT"
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
    "name": "DIAN",
    "price": 0.019,
    "url": "v2/co/company/dian"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "PEP"
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
    "name": "PROCURADURIA",
    "price": 0.019,
    "url": "v2/co/procuraduria/antecedentes"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "NIT"
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
    "name": "PROCESOS JUDICIALES",
    "price": 0.019,
    "url": "v2/co/rama/procesos"
}, {
    "country": "Colombia",
    "dependencies": [{
        "field": "processNumber",
        "type": "String",
        "required": true,
        "enum": null,
        "default": null,
        "min": null,
        "max": null
    }],
    "name": "DETALLES PROCESOS JUDICIALES",
    "price": 0.019,
    "url": "v2/co/rama/proceso"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "TI",
                "CE",
                "PA",
                "RC"
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
    "name": "CONDUCTOR",
    "price": 0.019,
    "url": "v2/co/runt/conductor"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "TI",
                "CE",
                "PA",
                "RC"
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
            "field": "plate",
            "type": "String",
            "required": true,
            "enum": null,
            "default": null,
            "min": null,
            "max": null
        }
    ],
    "name": "VEHICULO",
    "price": 0.019,
    "url": "v2/co/runt/vehiculo"
}, {
    "country": "Colombia",
    "dependencies": [{
        "field": "plate",
        "type": "String",
        "required": true,
        "enum": null,
        "default": null,
        "min": null,
        "max": null
    }],
    "name": "VEHICULO COMPLETO",
    "price": 0.019,
    "url": "v2/co/runt/vehiculo-completo"
}, {
    "country": "Colombia",
    "dependencies": [{
        "field": "plate",
        "type": "String",
        "required": true,
        "enum": null,
        "default": null,
        "min": null,
        "max": null
    }],
    "name": "EXCEPCION PICO Y PLACA BOGOTA",
    "price": 0.019,
    "url": "v2/co/vehiculo/pico-y-placa"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "PA",
                "RC",
                "TI"
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
    "name": "SUSPENSIONES",
    "price": 0.019,
    "url": "v2/co/simit/suspensiones"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "PA",
                "RC",
                "TI"
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
    "name": "ACUERDOS",
    "price": 0.019,
    "url": "v2/co/simit/acuerdos"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "PA",
                "RC",
                "TI"
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
    "name": "RESOLUCIONES",
    "price": 0.019,
    "url": "v2/co/simit/resoluciones"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "PA",
                "RC",
                "TI"
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
    "name": "SIMIT - COMPARENDOS",
    "price": 0.019,
    "url": "v2/co/simit/comparendos"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "NIT",
                "CC",
                "CE",
                "PA",
                "RC",
                "TI"
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
    "name": "CONSULTA GENERAL",
    "price": 0.019,
    "url": "v2/co/simit/consultar"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "PA",
                "RC",
                "TI"
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
    "name": "SUSPENSIONES",
    "price": 0.019,
    "url": "v2/co/simit/consultarSuspenciones"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "PA",
                "RC",
                "TI"
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
    "name": "ACUERDOS",
    "price": 0.019,
    "url": "v2/co/simit/consultarAcuerdos"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "PA",
                "RC",
                "TI"
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
    "name": "SUSPENSIONES",
    "price": 0.019,
    "url": "v2/co/simit/consultarComparendos"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "CE",
                "PA",
                "RC",
                "TI"
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
    "name": "RESOLUCIONES",
    "price": 0.019,
    "url": "v2/co/simit/consultarResoluciones"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "NIT"
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
    "name": "CONSULTA EMPRESA",
    "price": 0.019,
    "url": "v2/co/rues/consultarEmpresaPorNit"
}, {
    "country": "Colombia",
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC",
                "NIT"
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
    "name": "PROCESOS JUDICIALES",
    "price": 0.019,
    "url": "v2/co/procesos"
}, {
    "country": "Colombia",
    "dependencies": [{
        "field": "plate",
        "type": "String",
        "required": true,
        "default": null,
        "min": null,
        "max": null
    }],
    "name": "PROPIETARIOS DE VEHICULO",
    "price": 0.019,
    "url": "v2/co/runt/propietarios"
}, {
    "dependencies": [{
            "field": "documentType",
            "type": "String",
            "required": true,
            "enum": [
                "CC"
            ]
        },
        {
            "field": "documentNumber",
            "type": "String",
            "required": true
        },
        {
            "field": "date",
            "type": "String",
            "required": true
        }
    ],
    "country": "Colombia",
    "name": "FECHA DE EXPEDICION",
    "price": 0.2,
    "url": "v2/co/cedula/extra"
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