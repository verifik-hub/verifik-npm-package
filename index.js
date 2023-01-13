const core = require('./apis/core');

function Verifik(key) {
    core.setKey(key);

    const colombia = require('./apis/colombia');
    const panama = require('./apis/panama');
    const peru = require('./apis/peru');
    const venezuela = require('./apis/venezuela');
    
    return {
        colombia,
        panama,
        peru,
        venezuela,
    }
}


module.exports = Verifik;