function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// in block both times bc var is function scoped (unlike let which is block scoped)

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// const scope is blocked

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// var is func scoped but const x already declared

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

// let is block scoped

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    // let x = 'out of block again';
    console.log(x);
}

// cant make new x as a x is already declared with let in block (same scope)

// madLib

function madLib(verb, adjective, noun) {
    console.log(`We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}`)
}

// isSubstring

function isSubstring(searchString, subString) {
    return searchString.includes(subString);
}

// fizzBuzz

function fizzBuzz(array) {
    var found = [];

    for (i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0 ^ array[i] % 5 === 0) {
            found.push(array[i])
        }
    }

    return found;  
}

// isPrime

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// sumOfNPrimes

function firstNPrimes(n) {

}

function sumOfNPrimes(n) {
    let sum = 0;
    let nthPrime = 0;
    let i = 2;

    while (nthPrime < n) {
        if (isPrime(i)){
            sum += i
            nthPrime++
        }
        i++
    }

    return sum;
}