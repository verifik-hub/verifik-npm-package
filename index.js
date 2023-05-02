const {
    setKey,
    requestEndpoint,
} = require('./apis/core');

function Verifik(key) {
    setKey(key);

    const brazil = require('./apis/brazil');
    const chile = require('./apis/chile');
    const colombia = require('./apis/colombia');
    const costaRica = require('./apis/costa_rica');
    const mexico = require('./apis/mexico');
    const panama = require('./apis/panama');
    const peru = require('./apis/peru');
    const spain = require('./apis/spain');
    const venezuela = require('./apis/venezuela');

    return {
        brazil,
        chile,
        colombia,
        costaRica,
        mexico,
        panama,
        peru,
        spain,
        venezuela,
        requestEndpoint,
    };
}


module.exports = Verifik;