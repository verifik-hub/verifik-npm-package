const {
    setKey,
    requestEndpoint,
} = require('./apis/core');

function Verifik(key) {
    setKey(key);

    const chile = require('./apis/chile');
    const colombia = require('./apis/colombia');
    const costaRica = require('./apis/costa_rica');
    const panama = require('./apis/panama');
    const peru = require('./apis/peru');
    const venezuela = require('./apis/venezuela');

    return {
        chile,
        colombia,
        costaRica,
        panama,
        peru,
        venezuela,
        requestEndpoint,
    }
}


module.exports = Verifik;