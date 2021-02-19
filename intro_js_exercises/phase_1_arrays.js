Array.prototype.uniq = function() {
    var uniques = [];

    this.forEach(function(el) {
        if (!uniques.includes(el)) {
            uniques.push(el)
        }
    });

    return uniques;
}

// console.log([1,1,2,3,4,5,5,6].uniq());

Array.prototype.twoSum = function() {
    let pairs = [];
    let indexHash = {};

    this.forEach(function (el, idx) {
        if (indexHash[el * -1]) {
            const newPairs = indexHash[el * -1].map((prevIdx) => [prevIdx, idx]);

            pairs = pairs.concat(newPairs);
        }

        indexHash[el] ? indexHash[el].push(idx) : indexHash[el] = [idx];
    });

    return pairs;
}

// console.log([-1, 0, 2, -2, 1, 4, -8].twoSum());

Array.prototype.transpose = function () {

    const columns = Array.from(
        { length: this[0].length },
        () => Array.from({ length: this.length })
    );

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            columns[j][i] = this[i][j];
        }
    }

    return columns;
};

// console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose());
