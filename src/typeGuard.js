function isNumber(v) {
    return typeof v === 'number';
}
function isString(v) {
    return typeof v === 'string';
}
function padLeft(value) {
    if (isNumber(value)) {
        return value.toFixed(2);
    }
    return value.slice(1);
}
