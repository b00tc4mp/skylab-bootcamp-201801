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
    // WARN! do not pass the tests! should return a new array copy of the original!
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

    return arr[element - 1];

}

console.log('39) getNthLargest');
console.log(getNthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));


/* 32 ### findPairSum

Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

    Input: numbers= [10,20,10,40,50,60,70], target=50
    Output: 2, 3 */

function findPairSum(arr, target) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i, j);
            }
        }
    }
    console.log(result)
    return result.slice(2, 4);
}
console.log("Numbers= [10,20,10,40,50,60,70], target=50 and the output should be 2, 3 => " + findPairSum([10, 20, 10, 40, 50, 60, 70], 50))



/*  33 ### validValues

Write a JavaScript function to retrieve the value of a given property from all elements in an array.

    Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
    Expected result : [15, -22, 47]  */


function validValues(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(validValues([NaN, 0, 15, false, -22, '', undefined, 47, null]))


//26. Write a JavaScript function to generate an array between two integers of 1 step length.

function rangeBetwee(start, end) {
    var array = [];
    for (var i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));

//27. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.

function flat(arr, newArray) {
    newArray = newArray || [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flat(arr[i], newArray);
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;

}

flat([1, 2, 3, [4, 5], 6]);
flat([1, 2, [3, 4, [1, 2, [1, 2, 3]]], 5, 6]);
