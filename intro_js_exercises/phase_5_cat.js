function Cat(name, owner){
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
    return `${this.owner} loves ${this.name}`;
}

const cat = new Cat("Jeff", "Alfred");
const cat2 = new Cat("Winston", "Claire");
console.log(cat.cuteStatement());

Cat.prototype.cuteStatement = function () {
    return `Everyone loves ${this.name}!!`;
}

console.log(cat.cuteStatement());

Cat.prototype.meow = function () {
    return "meowwww";
}

console.log(cat.meow());

cat.meow = function () {
    return "better meowww!1!1"
}

console.log(cat.meow());
console.log(cat2.meow());

