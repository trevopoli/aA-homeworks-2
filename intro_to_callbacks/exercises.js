const readline = require('readline');

class Clock {
    constructor() {
         let date = new Date();

         this.seconds = date.getSeconds();
         this.minutes = date.getMinutes();
         this.hours = date.getHours();

         this.printTime();

         setInterval(() => this._tick(), 1000);
    }

    printTime() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick() {
        this.seconds++;

        if (this.seconds > 59){
            this.seconds = 0;
            this.minutes++;
            if (this.minutes > 59){
                this.minutes = 0;
                this.hours++;
                if (this.hours > 23){
                    this.hours = 0;
                }
            }
        }

        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
}

// const clock = new Clock();

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0){
        reader.question("Please give a number: ", function(num) {
            let parsedNum = parseInt(num);
            let newSum = sum + parsedNum;
            console.log(sum);
            addNumbers(newSum, numsLeft-1, completionCallback);
        });
    } else {
        completionCallback(sum);
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
