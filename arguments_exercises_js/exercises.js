function sum(nums) {
    let sum = 0;

    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    return sum;
}

function sumGood(...nums){
    let sum = 0;

    nums.forEach((num) => sum += num);

    return sum;
}

// console.log(sum(1, 2, 3, 4));
// console.log(sumGood(1, 2, 3, 4, 5));

Function.prototype.myBind1 = function (context) {
    const fxn = this;
    const bindArgs = Array.from(arguments).slice(1);
    return function boundFunction () {
        const callArgs = Array.from(arguments);
        return fxn.apply(context, bindArgs.concat(callArgs));
    };
}

Function.prototype.myBind2 = function (context, ...bindArgs) {
    const fxn = this;

    return function boundFunction (...callArgs) {
        return fxn.apply(context, bindArgs.concat(callArgs));
    }
}

function curriedSum(numArgs) {
    const numbers = [];

    function _curriedSum(num){
        numbers.push(num);

        if (numbers.length === numArgs) {
            let total = 0;
            numbers.forEach((n) => { total += n; });
            return total;
        } else {
            return _curriedSum;
        }
    }

    return _curriedSum;
}

// const threeSum = curriedSum(3);
// console.log(threeSum);
// console.log(threeSum(5)(4)(5));

Function.prototype.curry = function (numArgs) {
    const fxn = this;
    const allArgs = [];

    function _curried(arg) {
        allArgs.push(arg);

        if (allArgs.length === numArgs) {
            return this.apply(allArgs);
        } else {
            return _curried;
        }
    }

    return _curried;
}

Function.prototype.curry2 = function (numArgs) {
    const argArray = [];

    const _curriedFn = (arg) => {
        argArray.push(arg);
        if (argArray.length === nArg) {
            // spreading the array into individual arguments
            return this(...argArray);
        } else {
            return _curriedFn;
        }
    };
    return _curriedFn;
};