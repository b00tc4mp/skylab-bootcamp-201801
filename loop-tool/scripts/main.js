"use strict";

function loop(arr, callback, i) {
    i = i || 0;

    if (i < arr.length) {
        callback(arr[i]);

        loop(arr, callback, ++i);
    }
}

function addSymbol(el) {
    console.log(el + '$');
}

console.log(loop([1, 2, 3], addSymbol));
console.log(loop([1, 2, 3], addSymbol));

