function titleize(names, callback) {
    let titles = names.map(name => `Mx. ${name} Jingle Smith`)

    titles.forEach(printNames)
}

function printNames(name) {
    console.log(name)
}

// titleize(["Mary", "Sally", "Jeff"], printNames);

function Elephant(name, height, tricks) {
    this.name = name
    this.height = height
    this.tricks = tricks
}

Elephant.prototype.trumpet = function () {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
    this.height = this.height + 12;
};

Elephant.prototype.addTrick = function (trick) {
    this.tricks.push(trick);
};

Elephant.prototype.play = function () {
    let trick_idx = Math.floor(Math.random() * Math.floor(this.tricks.length));
    console.log(`${this.name} is ${this.tricks[trick_idx]}!`);
};

var winnie = new Elephant("Winnie", 50, ["walking", "spitting"]);

// console.log(winnie.height);
// winnie.play();
// winnie.grow();
// console.log(winnie.height);

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
    console.log(`${elephant.name} is trotting by!`)
}

// herd.forEach(Elephant.paradeHelper);

function dinerBreakfast() {
    let order = "I'd like cheesy scrambled eggs please.";
    console.log(order);

    return function (food) {
        order = `${order.slice(0, order.length - 8)} and ${food} please.`;
        console.log(order);
    };
};

// let bfast = dinerBreakfast();
// bfast("onions");
// bfast("hot dogs");