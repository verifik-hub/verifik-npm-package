const core = require('./apis/core');

function Verifik(key) {
    core.setKey(key);

    const colombia = require('./apis/colombia');
    const venezuela = require('./apis/venezuela');

    return {
        colombia,
        venezuela,
    }
}


module.exports = Verifik;