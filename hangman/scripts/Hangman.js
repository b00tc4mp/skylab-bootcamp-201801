function Hangman(mysteriousWord, attemps) {
    this.updateUnderscoreToPrint = function () { // Actualizamos los guiones por las letras acertadas
        var lettersAppeared = this.gameStatus.lettersAlreadyAppeared; // Array con las letras
        var wordAppeared = this.gameStatus.fullWord; // Array con la palabra
        var newUnderscore = "";
        if (wordAppeared.length == 1 && wordAppeared[0] === mysteriousWord){ // Si envío una palabra (más de dos caracteres)....
            this.gameStatus.underscoreToPrint = ' You have guessed the word, well done!';
        }else if(wordAppeared.length == 1 && wordAppeared[0] !== mysteriousWord){
            this.gameStatus.underscoreToPrint = ' Sorry, you have not guessed... the correct word is HELLO.';
        }
        
        
        else{ // Si envío una letra (un caracter)....
            
            for (var i = 0; i < mysteriousWord.length; i++) {
                if (lettersAppeared.indexOf(mysteriousWord[i]) === -1) {
                    newUnderscore += " _";
                }else {
                    newUnderscore += ' ' + mysteriousWord[i].toUpperCase();
                }
            }
            this.gameStatus.underscoreToPrint = newUnderscore;
        }
    };

    this.initGame = function () {
        this.gameStatus = {
            "underscoreToPrint": "",
            "lettersAlreadyAppeared": [],
            "fullWord" : []
        };
        var underscores = "";
        for (var i = 0; i < mysteriousWord.length; i++) {
            underscores += " _";
        }
        this.gameStatus.underscoreToPrint = underscores;
    };

    this.initGame(); // inicializo el juego (este método es invocado cada vez que se genera una instancia)
    
    this.try = function (userSayLetter) {
        if (userSayLetter.length > 1){
            this.gameStatus.fullWord.push(userSayLetter);
            this.updateUnderscoreToPrint();
        }else if (mysteriousWord.indexOf(userSayLetter) === -1) {
            attemps--;
            /* Comprobamos si el juego ha terminado */
            if (attemps === 0) {
            }
        } else {
            this.gameStatus.lettersAlreadyAppeared.push(userSayLetter);
            this.updateUnderscoreToPrint(); // Actualizamos los guiones bajos para mostrarselos al usuario

            /* Comprobamos si el jugador ha acertado la palabra */
            var arrUnderscore = this.gameStatus.underscoreToPrint.split(""); // Matriz separada por comas
            if (arrUnderscore.indexOf("_") === -1) {
            }
        }
        return (attemps + this.gameStatus.underscoreToPrint);
    };
}
