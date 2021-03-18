Function.prototype.inherits = function (superClass) {
    function Surrogate() {};
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

Function.prototype.inherits2 = function (BaseClass) {
    this.prototype = Object.create(BaseClass.prototype);
    this.prototype.constructor = this;
}

function Dog (name){
    this.name = name;
}
Dog.prototype.bark = function () {
    console.log(this.name + " barks!");
};

function Poodle (name) {
    Dog.call(this, name);
}
Poodle.inherits(Dog);

Poodle.prototype.shake = function () {
    console.log(this.name + " shakes!");
};

const cheeks = new Poodle("Cheeks");
cheeks.bark();
cheeks.shake();