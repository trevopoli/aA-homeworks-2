const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function teaAndBiscuits() {
    reader.question("Would you like tea?", function(teaAns){

        let first = (teaAns === 'yes' ? 'do' : 'don\'t');
        console.log(teaAns);

        reader.question("Would you like biscuits?", function(bisAns){

            let second = (bisAns === 'yes' ? 'do' : 'don\'t');
            console.log(bisAns);
            console.log(`So you ${first} want tea and you ${second} want biscuits.`);
            reader.close();

        });
    });
}

// teaAndBiscuits();

function Cat() {
    this.name = 'Markov';
    this.age = 3;
}

function Dog() {
    this.name = 'Noodles';
    this.age = 4;
}

Dog.prototype.chase = function (cat) {
    console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat();
const Noodles = new Dog();

// Noodles.chase(Markov);
// Noodles.chase.call(Markov, Noodles);
// Noodles.chase.apply(Markov, [Noodles]);
