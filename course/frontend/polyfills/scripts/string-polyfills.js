if (typeof String.prototype.singleQuotes === 'undefined')
    String.prototype.singleQuotes = function () {
        return '\'' + this + '\'';
    }