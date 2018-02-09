/**
 * Text tool
 * 
 * @version 1.0.0b
 */

function _text(source) {
    //var wrap = function (arg1, arg2) {
    function wrap(arg1, arg2) {
        if (arg2 === undefined) {
            arg2 = arg1;
        }

        source = arg1 + source + arg2;

        return this;
    }

    //var toString = function () {
    function toString() {
        return source;
    }

    return {
        wrap: wrap,
        toString: toString
    };
}

function text(_text) {
    return {
        wrap: function wrap(a, b) {
            _text = b ? a + _text + b : a + _text + a;
            
            return this;
        },

        toString: function () {
            return _text;
        }
    };
}