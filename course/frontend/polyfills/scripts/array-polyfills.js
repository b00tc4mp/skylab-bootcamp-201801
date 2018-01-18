if (typeof Array.prototype.forEach === 'undefined')
    Array.prototype.forEach = function (func) {
        console.log('this is my implementation of forEach!')
        for (var i = 0; i < this.length; i++)
            func(this[i]);
    };