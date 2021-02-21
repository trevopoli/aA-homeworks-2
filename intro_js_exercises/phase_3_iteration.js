Array.prototype.bubbleSort = function (){
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;

        for (i = 0; i < this.length; i++) {
            if (this[i] > this[i+1]){
                isSorted = false;
                [this[i], this[i+1]] = [this[i+1], this[i]];
            }
        }
    }

    return this;
}

// console.log([1,5,3,2].bubbleSort());


String.prototype.subStrings = function () {
    let substrings = [];

    for (i = 0; i < this.length; i++) {
        for (j = i+1; j <= this.length; j++) {
            substrings.push(this.slice(i,j));
        }
    }

    return substrings;
}

// console.log("letsgo".subStrings());