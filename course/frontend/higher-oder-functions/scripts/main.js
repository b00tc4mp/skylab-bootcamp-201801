function _countVowels(text) {
    var characters = text.toLowerCase().split('');
    var vowels = 'aeiou';

    var countVowels = characters.reduce(function (acc, current) {
        return vowels.indexOf(current) > -1 ? acc + 1 : acc;
    }, 0);

    return countVowels;
}

var countVowels;
(function () {
    var regex = /[aeiouàèìòùáéíóúâêîôûãõäëïöüå]/ig;

    countVowels = function (text) {
        return text.split('').reduce(function (vowelsCount, letter) {

            //if (letter.match(regex)) {
            if (regex.test(letter)) {
                return vowelsCount += 1
            }

            return vowelsCount
        }, 0)
    }
})();

console.log('should countVowels("hello world") result 3', countVowels('hello world'));
console.log('should countVowels("cómo estás?") result 4', countVowels('cómo estás?'));
console.log('should countVowels("CÓMO ESTÁS?") result 4', countVowels('CÓMO ESTÁS'));
console.log('should countVowels("cómo estás?+&%@\\") result 4', countVowels("cómo estás?+&%@\\"));
console.log('should countVowels("cómo estâs?") result 4', countVowels('cómo estâs?'));


//## Callback
//Write a callback function that receives an age and a callback function, if age is equal
//or great than 18, call the callback function to allow enter in a bar, if hasn't 18 the entrance is not allowed.

function accessBar(age, callback) {
    age >= 18 ? callback(true) : callback(false);
}

function advisor(allowed) {
    console.log(allowed ? 'the entrance is allowed' : 'the entrance is not allowed');
}

accessBar(8, advisor);

// other callback demo

//CallBack ASYNC -->
function request(callback) {
    console.log("Pidiendo datos al servidor...");

    setTimeout(function () {
        console.log('response received from server');
        
        var status = 200;

        callback(status);
    }, 2000);
}

function serverRequest(status) {
    console.log("Done! request success! received status", status);
}

request(serverRequest);
console.log('continue with other stuff...');

// SOME
function moreFiveLetter(words) {
    return words.some(function (word) {
        console.log(word);

        return word.length >= 5;
    });
 }

console.log('should return true for array with words longer than 5 chars', moreFiveLetter(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']));

function allWordsHaveFiveLettersOrMore(words) {
    return words.every(function (word) {
        console.log(word);
        
        return word.length > 4;
     });
}

 console.log('should return false for array with words shorter than 5 chars', allWordsHaveFiveLettersOrMore(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']));
 