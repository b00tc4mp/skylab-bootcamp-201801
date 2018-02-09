function Ferrari(model, power) {
    this.model = model;
    this.power = power;
}

Ferrari.prototype = new Car("ferrari");

Ferrari.prototype.start = function () {
    return 'RRR...';
};

Ferrari.prototype.stop = function () {
    return '...R.';
};