function NumberUtils() {};

NumberUtils.prototype.multiple = function(first, second) {
    return first * second;
}

NumberUtils.prototype.divide = function(number, part) {
    if (part === 0) return NaN;
    return number / part;
}
