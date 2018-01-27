function _Hangman(word, attemps) {
    var cadena = [];
    for (var i = 0; i < word.length; i++) {
        cadena.push('_');
    }
    var play = true;
    var ok = false;
    this.try = function (charOrWord) {
        var message = '';
        if (play) {
            if (charOrWord.length <= 1) {
                // QUERY all this logic could be processed in one function?
                for (var i = 0; i < word.length; i++) {
                    if (charOrWord.toLowerCase() === word.charAt(i).toLowerCase()) {
                        ok = true;
                        // cadena.splice(i, 1, _word.toUpperCase());
                        cadena[i] = charOrWord.toUpperCase();
                    }
                }
                if (ok) {
                    (cadena.indexOf('_') === -1) ?
                    (message = cadena.join(" ") + ' // Very Well you acerted', play = false) :
                    (ok = false, message = attemps + " " + cadena.join(" "));
                } else {
                    --attemps;
                    (attemps === 0) ?
                    (message = 'Sorry, you have not guessed... the correct word is ' + word.toUpperCase() + '.', play = false) :
                    (message = attemps + " " + cadena.join(" "));
                }
            } else {
                // QUERY all this logic could be processed in one function?
                play = false;
                return (charOrWord === word ? 'You have guessed the word, well done!' : 'Sorry, you have not guessed... the correct word is ' + word.toUpperCase() + '.');
            }
        } else {
            message = 'GAME OVER.';
        }
        return message;
    }
}

function _Hangman(word, attemps) {
    var wordArr = word.toUpperCase().split('');
    var N = word.length;
    var board = [];
    for (var i = 0; i < N; i++) {
        board[i] = '_';
    }
    var letterCount = 0;
    var gameOver = false;
    var win = false;

    this.attemps = attemps;

    this.try = function (response) {
        if (!gameOver && !win) {
            if (!response || typeof response !== "string") {
                return "Please, enter a valid character or word!";
            }
            var responseUpper = response.toUpperCase();
            if (responseUpper.length > 1) {
                // QUERY all this logic could be processed in one function?
                //palabra
                if (responseUpper === word.toUpperCase()) {
                    //win
                    win = true;
                    return "You have guessed the word, well done!";
                } else {
                    //lose
                    gameOver = true;
                    return "Sorry, you have not guessed... the correct word is " + word.toUpperCase() + ".";
                }
            } else {
                // QUERY all this logic could be processed in one function?
                //letra
                var foundALetter = false;
                for (var i = 0; i < N; i++) {
                    if (responseUpper === wordArr[i]) {
                        board[i] = wordArr[i];
                        //delete wordArr[i];
                        wordArr[i] = undefined;
                        letterCount++
                        foundALetter = true;
                    }
                }
                // mostramos tablero
                if (!foundALetter) {
                    attemps--;
                }
                if (attemps === 0) {
                    gameOver = true;
                }
                if (N === letterCount) {
                    win = true;
                }
                return attemps + ' ' + board.join(' ');
            }
        } else {
            //Show message
            return "GAME OVER.";
        }
    }
}

function _Hangman(word, attempts) {
    var w = word.split('');
    var underscore = new Array(w.length);
    var endGame = false;
    for (var i = 0; i < underscore.length; i++)
        underscore[i] = '_';

    function win(charOrWord) {
        if (charOrWord === word || underscore.join('') === word)
            return true;
    }

    function gameOver(charOrWord) {
        if (attempts === 0) {
            return true;
        } else if (charOrWord.length > 1 && charOrWord != word) {
            return true;
        }

    }
    this.try = function (charOrWord) {
        if (endGame === false) {
            var check = false;
            for (var i = 0; i < w.length; i++) {
                if (charOrWord === w[i]) {
                    underscore[i] = w[i].toUpperCase();
                    check = true;
                }
            }
            if (check === true) {
                check = false;
                if (win(charOrWord)) {
                    endGame = true;
                    return 'You have guessed the word, well done!';
                } else {
                    return attempts + ' ' + underscore.join(' ');
                }
            } else if (win(charOrWord)) {
                endGame = true;
                return 'You have guessed the word, well done!';
            } else {
                attempts--;
                if (gameOver(charOrWord)) {
                    if (charOrWord.length > 1) {
                        endGame = true;
                        return 'Sorry, you have not guessed... the correct word is HELLO.';
                    } else {
                        endGame = true;
                        return 'Sorry, you have not guessed... the correct word is HELLO.';
                    }
                } else {
                    return attempts + ' ' + underscore.join(' ');
                }

            }
        } else {
            return 'GAME OVER.'
        }

    }
}

function Hangman(word, attemps) {
    var word = word.toLocaleLowerCase()
    if (word && attemps) {
        var correctLetters = []
        this.try = function (string) {
            var self = this
            if (string && isNaN(string)) {
                attemps--
                if (attemps >= 0) return (string.length > 1) ? allWord(string) : letter(string)
                return "GAME OVER."
            }
            return console.error("no letter inputed")
            //Clousure
            function letter(string) {
                var string = string.toLocaleLowerCase()
                if (word.includes(string)) {
                    attemps++
                    var currentWordUser = word.split("").map(function (el) {
                        return (correctLetters.includes(el)) ? el : "_"
                    }).join(" ")
                    correctLetters.push(string)
                    if (currentWordUser == word) {
                        attemps = 0
                        return "You have guessed the word, well done!"
                    }
                    console.log("Nice! " + string + " is correct letter! ")
                    return attemps + " " + self.print()
                }
                console.log("Nop... Try again...")
                return attemps + " " + self.print()
            }

            function allWord(string) {
                var string = string.toLocaleLowerCase()
                attemps = 0
                if (string === word) {
                    return "You have guessed the word, well done!"
                }
                return "Sorry, you have not guessed... the correct word is " + word.toUpperCase() + "."
            }
        }
        this.print = function () {
            var arrWor = word.split("")
            return arrWor.map(function (el) {
                return (correctLetters.includes(el)) ? el.toUpperCase() : "_"
            }).join(" ")
        }
    } else {
        return console.error("no word or attemps inputed")
    }
}