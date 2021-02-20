Array.prototype.myEach = function (callback) {
    for (i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function (callback) {
    const newArray = [];

    this.myEach(element => newArray.push(callback(element)));

    return newArray;
}

// console.log([1,2,3,4].myMap(function(ele) {
//     return ele*-1;
// }));

Array.prototype.myReduce = function (callback, initialValue) {
    let arr = this
    
    if (initialValue === undefined) {
        initialValue = this[0];
        arr = this.slice(1)
    }

    final = initialValue

    arr.myEach(element => final = callback(final, element))

    return final;
}

// console.log([1, 2, 3, 4].myReduce(function (final, ele) {
//     return final+ele+1;
// }));