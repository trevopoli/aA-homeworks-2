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

// fixxBuzz


