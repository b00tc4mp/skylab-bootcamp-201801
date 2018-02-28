function _reverseString(str) {
    if (str === "") {
        return ''
    } else {
        return reverseString(str.slice(1)) + str.charAt(0);
    }
}

// INFO just a little improvement
function _reverseString(str) {
    return str ? reverseString(str.slice(1)) + str.charAt(0) : '';
}

var _reverseString;
(function () {
    var result = [],
        currentPosition = 0;

    reverseString = function (stringToReverse) {

        if (result.length <= stringToReverse.length) {

            result.push(stringToReverse[stringToReverse.length - currentPosition]);

            currentPosition++;

            reverseString(stringToReverse);
        }
        return result.join('');
    }
})();


function _reverseString(word) {
    var counter = 0;
    var wordreverse = [];
    var i = word.length;

    function recursiveFunction(word) {
        counter++;
        wordreverse.push(word.charAt(i - 1));
        i--;
        if (counter < word.length) return recursiveFunction(word);
    }

    recursiveFunction(word);

    return wordreverse.join("");
}


var arr = [];

function _reverseString(string) {
    var newstring;
    var arrString = string.split("");

    if (arrString.length === 0) {
        return 1;
    }

    arr.push(arrString[arrString.length - 1]);
    arrString.pop();

    newString = arrString.join("");
    reverseString(newString);

    return arr.join("");
}

// INFO litle improvement
function reverseString(string, arr) {
    arr = arr || [];

    var newstring;
    var arrString = string.split("");

    if (arrString.length === 0) {
        return 1;
    }

    arr.push(arrString[arrString.length - 1]);
    arrString.pop();

    newString = arrString.join("");
    reverseString(newString, arr);

    return arr.join("");
}

console.log(reverseString("hello"))