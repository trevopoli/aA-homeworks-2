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
            console.log(newSum);
            addNumbers(newSum, numsLeft-1, completionCallback);
        });
    } else {
        completionCallback(sum);
    }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, callback){
    reader.question(`Is ${el1} > ${el2} ?`, function(input){
        if (input === 'yes') {
            callback(true);
        } else {
            callback(false);
        }
    });
}

// askIfGreaterThan(4, 7, function(ans){
//     console.log(ans);
// });

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
    if (i < arr.length - 1){
        askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan){
            if (isGreaterThan) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                madeAnySwaps = true;
            }
            i++;
            innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
        });
    } else {
        outerBubbleSortLoop(madeAnySwaps);
    }
}

// innerBubbleSortLoop([1,5,2,3,7,4], 0, false, function(madeAnySwaps){
//     console.log('in outter loop');
// });

function absurdBubbleSort(arr, sortCompletionCallback){

    function outerBubbleSortLoop(madeAnySwaps){
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    };

    outerBubbleSortLoop(true);
}

// absurdBubbleSort([9,4,6,2,1,8,3], function(arr){
//     console.log(`sorted: ${arr}`);
// });

Function.prototype.myBind = function(context){
    return (() => this.apply(context));
};

function myThrottle(interval) {

}

Function.prototype.myThrottle = function (interval) {

    let tooSoon = false;

    return (...args) => {
        if (!tooSoon) {
            tooSoon = true;
            setTimeout(() => tooSoon = false, interval);
            this(...args);
        }
    }
}

Function.prototype.myDebounce = function (interval) {
    
    let timeout;

    return (...args) => {
        const fnCall = () => {
            timeout = null;
            this(...args);
        }

        clearTimeout(timeout);
        timeout = setTimeout(fnCall, interval);
    }
}