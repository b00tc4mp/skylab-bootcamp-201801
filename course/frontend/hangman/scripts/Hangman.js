function Hangman(word, attempts) {
    var arrWord = word.toUpperCase().split("");
    var arr_Word = new Array(word.length);
    arr_Word.fill('_');
    this.attempts = attempts;

    this.try = function (charOrWord) {
        var message = "";
        if (attempts > 0 && arr_Word.indexOf("_") >= 0) {
            if (charOrWord.length > 1) {
                (word.toUpperCase() === charOrWord.toUpperCase()) ? message = 'You have guessed the word, well done!' : message = 'Sorry, you have not guessed... the correct word is HELLO.';
                attempts = 0;
            } else {
                var exist = false;
                for(var i = 0; i < arrWord.length; i++){
                    if(charOrWord.toUpperCase() === arrWord[i]){
                        arr_Word[i] = arrWord[i];
                        exist = true;
                    }
                }
                (exist === true) ? attempts : --attempts;
                message = attempts + " " + arr_Word.join(' ');
                if (arr_Word.indexOf('_') < 0) console.log('You have guessed the word, well done!');
            }
        } else {
            message = "GAME OVER.";
        }
        return message;
    }
}
var game = new Hangman('hello',10)



Hangman.prototype.try = function (charOrWord) {
    // TODO
};