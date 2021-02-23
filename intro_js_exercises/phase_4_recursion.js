const range = function (start, end) {
    if (end < start) {
        return [];
    }

    let values = range(start, end-1);

    values.push(end);
    
    return values;
}

// console.log(range(1,4));

function sumRec(numArrary) {
    if (numArrary.length <= 0) {
        return 0;
    }

    let sum = sumRec(numArrary.slice(1, numArrary.length)) + numArrary[0];

    return sum;
}

// console.log(sumRec([1,2,3,4,5]));

function exponentOne(base, exp) {
    if (exp === 0) {
        return 1;
    }

    let total = exponentOne(base, exp-1) * base;

    return total;
}

function exponentTwo(base, exp) {
    switch(exp) {
        case 0:
            return 1;
        case 1:
            return base;
    }


    if (exp % 2 === 0) {
        return exponentTwo(base, exp / 2) ** 2
    } else {
        return (exponentTwo(base, (exp - 1) / 2) ** 2) * base;
    }

}

// console.log(exponentTwo(2, 5));

function fibonacci(num) {
    if (num === 1) {
        return [1];
    }

    let sequence = fibonacci(num-1)

    if (num === 2){
        sequence.push(1)
    } else {
        sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2]);
    }

    return sequence;
}

// console.log(fibonacci(10));

function deepDup(arr) {
    if (!(arr instanceof Array)) {
        return arr;
    }
    return arr.map((el) => {
        return deepDup(el);
    });
}

function bsearch(arr, target) {
    if (arr.length === 0) {
        return -1;
    }

    const probeIdx = Math.floor(arr.length / 2);
    const probe = arr[probeIdx];

    if (target === probe) {
        return probeIdx;
    } else if (target < probe) {
        return bsearch(arr.slice(0, probeIdx), target);
    } else {
        const right = arr.slice(probeIdx+1);
        const subProb = bsearch(right, target);

        return subProb === -1 ? -1 : subProb + (probeIdx + 1);
    }
}

// console.log(bsearch([1,2,3,4], 3));

function mergesort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);

    const left = mergesort(arr.slice(0,middle));
    const right = mergesort(arr.slice(middle));
    
    return merge(left, right);
}

function merge(left, right) {
    const merged = [];

    while (left.length > 0 && right.length > 0) {
        let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
        merged.push(nextItem);
    }

    return merged.concat(left, right);
}

// console.log(`mergesort([4, 5, 2, 3, 1]) = ${mergesort([4, 5, 2, 3, 1])}`);

function subsets(arr) {
    if (arr.length === 0) {
        return [[]];
    }

    let first =  arr[0];
    let remaining = subsets(arr.slice(1));

    let complete = remaining.map(sub => [first].concat(sub));

    return remaining.concat(complete);
} 

// console.log(`subsets([1, 3, 5]) = ${JSON.stringify(subsets([1, 3, 5]))}`);