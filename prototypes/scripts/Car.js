function Car(brand, model, motor) {
    this.brand = brand;
    this.model = model;
    this.motor = motor || 'petrol';
}

Car.prototype.start = function () {
    return this.motor === 'petrol' ? 'rrr...' : 'r-r-r...';
};

Car.prototype.stop = function() {
    return this.motor === 'petrol' ? '...r.' : '...r-r.';
};