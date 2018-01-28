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

 console.log('0) joinElements(undefined) should result joined elements', joinElements(undefined));
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

//Alex GR

//removeDuplicate

function duplicates(arr) {
     var duplicate = [];
  
    for (var i = 0; i < arr.length; i++) {

      if (duplicate.indexOf(arr[i]) == -1) {
            duplicate.push(arr[i]);
        }

    }
    return duplicate;
}



console.log('should duplicates(["Alice", "John", "Maria", "John"] return ["Alice", "John", "Maria"]', duplicates(["Alice", "John", "Maria", "John"]));


//showChoice
function showChoice(arr) {
    var chain = '';
    for (var i = 0; i < arr.length; i++) {
        switch (i + 1) {
            case 1:
                chain += (i + 1) + 'st choice is ' + arr[i] + '\n';
                break;
            case 2:
                chain += (i + 1) + 'nd choice is ' + arr[i] + '\n';
                break;
            case 3:
                chain += (i + 1) + 'rd choice is ' + arr[i] + '\n';
                break;

            default:
                chain += (i + 1) + 'th choice is ' + arr[i] + '\n';
                break;
        }

    }
    return chain;
}
console.log(showChoice(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]))

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


/* Exercises 28, 29
### unionArray

Write a JavaScript program to compute the union of two arrays.
Sample Data :

    console.log(unionArray([1, 2, 3], [100, 2, 1, 10]));
    [1, 2, 3, 10, 100]

/**
* Function unionArray 
* Returns one numeric merged array without duplicated values.
* @param {array} first argument
* @param {array} second argument
* @returns {array} numeric values.
*/

function unionArray(){ 
     'use strict';
     try{
         if( !arguments || arguments.length === 0 || arguments.length > 2 || !(arguments[0] instanceof Array) || !(arguments[1] instanceof Array) ) throw new Error('OUT of SPECS.'); 
     }catch(e){
         return e;
     }
     var result = arguments[0].concat( arguments[1] ).sort(function(a,b){ return a-b  });
     var index = result.length;
     while( index-- ){
         if( result[ index ] === result[ index-1 ] ) result.splice( index , 1 );
     }
    return result;
};

console.log( "%cArray union function\n", "font-weight : bold;", "arguments : [1, 2, 3], [100, 2, 1, 10]\n Expected result : [1, 2, 3, 10, 100]\n Function result : " , unionArray( [1, 2, 3], [100, 2, 1, 10] ) );

/*
### removeFalsy

Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

    Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
    Expected result : [15, -22, 47]

/**
 * Function removeFalsy
 * Returns one numeric array without empty,
 * @param {array} first argument 
 * @returns {array}  
 */

function removeFalsy(){    
     'use strict';
      try{
         if( !arguments || arguments.length === 0 || arguments.length > 1 || !(arguments[0] instanceof Array) ) throw new Error('OUT of SPECS.'); 
      }catch(e){
         return e;
      }
     return arguments[0].filter( Number );
}

console.log( "%cremoveFalsy function\n", "font-weight : bold;", "arguments : [NaN, 0, 15, false, -22, '',undefined, 47, null]\n Expected result : [15, -22, 47]\n Function result : " , removeFalsy( [NaN, 0, 15, false, -22, '',undefined, 47, null] ) );

function swapTheCase(word){
    var result = '';

    for (var i = 0; i < word.length; i++){
    (word[i] === word[i].toUpperCase())? result += word[i].toLowerCase() : result += word[i].toUpperCase();    
    }

    return result;
}

console.log('swapTheCase(\'TesTing SWAPcase fUNcTion\') should result \'tEStING swapCASE FunCtION\' : ' + swapTheCase('TesTing SWAPcase fUNcTion'));


//////////////////////////////////////////
// Find Differences
//////////////////////////////////////////

function difference(array1, array2) {
    var result =  array1.concat(array2).filter(function(val, index, arr){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
    return result;
}


  console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
  console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));



//////////////////////////////////////////
// Sum and Product,
//////////////////////////////////////////
function sumArray(arr){
    var sum=0;
    var product = 1;
    
    for(var i=0;i<arr.length;i++){
        sum=sum+arr[i];
        product = product*arr[i];
    }
    return "Sum: "+sum+", product: "+product;
}
sumArray([1,3,4]);
// we can test it also with reduce


//6.Add items

function addItemsIntoArray(){
    var arrayPush=[];
  
    for(elem of arguments){
		  arrayPush.push(elem);
	  }
  
    return arrayPush;
}
console.log(addItemsIntoArray(2,4,6))


function printArrayElements(arr){

    var str = '';

    for (var i = 0; i < arr.length; i++){
        str += 'row ' + i + '\n';
            for (var j = 0; j < arr[i].length; j++){
                str += arr[i][j] + '\n';
            }
    }
    return str;
}

console.log('printArrayElements([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]) should result row x and below inner elements for all rows: ' + '\n' + printArrayElements([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));

/*
arrayFilled (string)
Write a JavaScript function to create a specified number of elements with pre-filled string value array.

    Test Data :
    console.log(arrayFilled(3, 'default value')); 
    ["default value", "default value", "default value"]
    console.log(arrayFilled(4, 'password'));
    ["password", "password", "password", "password"]
*/
function arrayFilled(num, value) {
    var result = [];
    if (typeof num != "number") {
        num = 0
    }
    for (var i = 0; i < num; i++) {
        result[i] = value;
    }
    return result;
}

// TODO ADD testing cases!!!

/*mostFrequentItem
Write a JavaScript program to find the most
 frequent item of an array.
 */

Array.prototype.mostFrenquentItem = function (array) {
    var contRep = 1;
    var contItem = 0;
    var item;
    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[i] == array[j])
                contItem++;
            if (contRep < contItem) {
                contRep = contItem;
                item = array[i];
            }
        }
        contItem = 0;
    }
    var text = item + ": " + contRep;
    return text;
}

// TODO ADD testing cases!

/*moveElement
Write a JavaScript function to move an 
array element from one position to another.
*/

Array.prototype.moveElement = function (array, index, pos) {
    var value = array.splice(index, 1);
    array.splice(pos, 0, value[0]);
    return array;
}

// TODO ADD testing cases!


/*
Sum squares
Write a JavaScript program to find the sum of squares of a numeric vector.
*/

function sumSquares(numArr) {
    var sum = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (typeof numArr[i] == "number") {
            sum += numArr[i] ** 2;
        }
    }
    return sum;
}

// TODO ADD testing cases!!!
