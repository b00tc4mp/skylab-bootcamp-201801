function isArray(arr) {
    return arr instanceof Array;
}

function _isArray(arr) {
    return Array.isArray(arr);
}

function _isArray(a) {
    // TODO make this impl null / undefined safe!
    return a.constructor == Array
}

function _isArray(array) {
    // TODO make this impl null / undefined safe!
    // WARN! this impl also passes tests 6 and 7, but shouldn't!
    return array.length >= 0 && ((typeof array) == "object");
}

function _isArray(element) {
    if (element === null || element === undefined) {
        return false;
    }
    var result = Object.prototype.toString.call(element).slice(8, -1);
    return (result == "Array") ? true : false;
}

console.log('0) isArray(undefined) should result false', isArray(undefined));
console.log('0.1) isArray(null) should result false', isArray(null));
console.log('1) isArray([]) should result true', isArray([]));
console.log('2) isArray([1, 2, 3]) should result true', isArray([1, 2, 3]));
console.log('3) isArray("string") should result false', isArray('string'));
console.log('4) isArray({}) should result false', isArray({}));
console.log('5) isArray(1) should result false', isArray(1));
console.log('6) isArray({ length: 0 }) should result false', isArray({
    length: 0
}));
console.log('7) isArray({ length: 1 }) should result false', isArray({
    length: 1
}));

function _joinElements(arr) {
    // TODO make this impl null / undefined safe!
    var output = '';
    for (var i = 0; i <= arr.length - 1; i++) {
        if (i == arr.length - 1) {
            output += arr[i];
        } else {
            output += arr[i] + ', ';
        }
    }
    return output;
}

function joinElements(a) {
    // TODO make this impl null / undefined safe!
    return a.join(',');
}

//console.log('0) joinElements(undefined) should result joined elements', joinElements(undefined));
console.log('1) joinElements([1, 2, 3]) should result joined elements', joinElements([1, 2, 3]));

function _arrayClone(a) {
    // ERROR! do not pass the tests! should return a new array copy of the original!
    return new Array(a)
}

function arrayClone(arr) {
    return arr.slice();
}

function _arrayClone(array) {
    // INFO same as before, but more extensive.
    return array.slice(0, array.length);
}

var arr = [1, 2, 3];
var res;
console.log('1) arrayClone([1, 2, 3])', res = arrayClone(arr), 'and should be a new array', res != arr);
arr = [1, 2, 3, [1, 2, 3]];
console.log('1) arrayClone([1, 2, 3, [1, 2, 3]])', res = arrayClone(arr), 'and should be a new array', res != arr);

function recursiveArrayClone(source) {
    var result = [];
    for (var i = 0; i < source.length; i++) {
        if (isArray(source[i])) {
            // Ejemplo de recursividad
            result.push(recursiveArrayClone(source[i]));
        } else {
            result.push(source[i]);
        }
    }
    return result;
}

console.log('1) recursiveArrayClone([1, 2, 3, [1, 2, 3]])', res = recursiveArrayClone(arr), 'and should be a new array', res != arr, 'and sub-array should be a new array', arr[3] != res[3]);

/*Write a JavaScript script to empty an array keeping the original size.*/

function emptyArray(arr){
    arr.fill(null);
    return arr.length;
}

console.log('38) emptyArray')
console.log(emptyArray([1,2,3]));

/*Write a JavaScript function to get nth largest element from an unsorted array.*/

function getNthLargest(arr,element){
    arr.sort(function(a,b){
        return a - b;
    })

    return arr[element];

}

console.log('39) getNthLargest');
console.log(getNthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));