const Util = {

    inherits: function inherits(childClass, parentClass) {
        childClass.prototype = Object.create(parentClass.prototype);
        childClass.prototype.constructor = childClass;
    },

    randomVec: function randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },

    // Scale the length of a vector by the given amount.
    scale: function scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },

    wrap: function wrap(coord, max) {
        if (coord < 0) {
            return max - (coord % max);
        } else if (coord > max) {
            return coord % max;
        } else {
            return coord;
        }
    }
};

module.exports = Util;