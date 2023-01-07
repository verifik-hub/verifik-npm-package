const core = require('./apis/core');

function Verifik(key) {
    core.setKey(key);

    const colombia = require('./apis/colombia');

    return {
        colombia,
    }
}


module.exports = Verifik;