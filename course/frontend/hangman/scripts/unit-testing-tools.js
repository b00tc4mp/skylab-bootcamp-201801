function should(value) {
    return {
        result: function(expected) {
            if (value !== expected) throw new Error('condition not accomplished, expected ' + expected + ' but got ' + value);
        }
    };
}

function test(unit) {
    try {
        unit();

        console.log('TEST', unit.name, 'PASSED');
    } catch(err) {
        console.error('TEST', unit.name, 'NOT PASSED', err.message);
    }
}