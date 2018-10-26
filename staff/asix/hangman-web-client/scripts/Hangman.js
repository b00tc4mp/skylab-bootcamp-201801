function Hangman(word, attemps) {
    var play = true;
    var word = word;
    this.attemps = attemps;
    var result = [];
    var letterMemory = [];
    var acierto = false;
    var counter = 0;
    var allCorrect = true;
    this.try = function (reply) {

        justLetters(reply);

        if (allCorrect) {

            if (reply.length === 1) {
                if (attemps > 0) {
                    return checkLetter(reply)
                } else {
                    return checkWord(reply)
                }
            } else {
                return checkWord(reply)
            }
        } else {
            return 'Please, enter a valid character or word!'
        }
    }

    function checkLetter(reply) {
        //word = word.toUpperCase();
        word = Array.from(word);
        //word= word.split("")
        if (counter === 0) {
            for (var i = 0; i < word.length; i++) {
                result += "_"
                counter = 1
            }
        }
        result = result.split(" ")
        letterMemory.push(reply)
        for (var i = 0; i < word.length; i++) {
            if (word[i] === reply) {
                result[i] = result[i].replace('_', word[i].toUpperCase());
                acierto = true
            }
        }
        if (acierto != true) {
            --attemps
            acierto = false;
        }
        //console.log(result)

        result = result.join("")
        //console.log(result + " te quedan estos intentos: " + attemps)
        if (word.join("") == result) {
            reply = word.join();
            word = word.join();
            checkWord(reply)
        }

        result = result.split('');
        //console.log(attemps + " " + result)
        //return attemps + " " + result;
        return {
            attemps: attemps,
            result: result
        }
    }



    function checkWord(reply) {
        if (play === true) {
            if (reply === word.join("")) {
                play = false;
                return "You have guessed the word, well done!"

            } else {
                play = false;
                return "Sorry, you have not guessed... the correct word is HELLO."

            }
        } else {
            return "GAME OVER."
        }
        // console.log("Sorry, you have not guessed... the correct word is HELLO.")
    }

    function justLetters(input) {
        allCorrect = true;
        var out = '';
        //valid characters
        var filtro = 'áéíóúÁÉÍÓÚabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var checkInput = input.toString();


        for (var i = 0; i < checkInput.length; i++) {
            if (filtro.indexOf(checkInput.charAt(i)) === -1) {

                allCorrect = false;
                break;
            }

        }

        return out;
    }
}