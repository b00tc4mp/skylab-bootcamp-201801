// function Hangman(word, attemps) {
//     // TODO
// }

// Hangman.prototype.try = function(charOrWord) {
//     // TODO
// };
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



function toNormalCase(string) {
    return string.split('').map(el => (el <= 'Z') ? ` ${el.toLowerCase()}` : el).join('')
}

function random(arr) {
    var count = 0
    var randomArr
    console.log(count);
    (function structure() {
        randomArr = arr.map(el => el[Math.floor(el.length * Math.random())])
    })()

    return randomArr.filter((a, b, c) => {
        try {
            count ++
            c.forEach(function (el) {
                console.log(el,a)
                if (el === a) throw BreakException;
            });
            return true
        } catch (e) {
           random(arr)
        }
    })
}



// arr.filter((a, b, c) => {
//     try {
//         c.forEach(function (el) {
//             if (el === a) throw BreakException;
//         });
//         return true
//     } catch (e) {
//        random(err)
//     }
// })