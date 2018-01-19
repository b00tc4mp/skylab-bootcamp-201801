function Hangman(word, attempts) {
    var arrayWord = word.split("");
    var numberOfLetters = arrayWord.length;

    function preFilledArray(number, value) {
      var arr = [];
      for (var i = 0; i < number; i++) {
        arr.push(value);
      }
      return arr;
    }

    function win() {
     return "You have guessed the word, well done!";
    }

    function lose() {
      return "Sorry, you have not guessed... the correct word is " + word.toUpperCase();
    }

    var emptyWord = preFilledArray(numberOfLetters, "_");

    this.try = function(letter) {
      var numberOfTryLetters = letter.split("").length;
      // if there is more than 1 letter, then we are trying to guess the complete word and call the function guessword
    //   numberOfTryLetters > 1 ? guessWord(letter) : tryLetter(letter);
     
      if(numberOfTryLetters > 1){
           if (letter === word) {
            return "You have guessed the word, well done!";
           } else {
             return "Sorry, you have not guessed... the correct word is " + word.toUpperCase() + '.';
           }
      } else {
         tryLetter(letter); 
          return attempts + " " + emptyWord.join(" ");  
      }
      
    };

    function tryLetter(letter) {
      if (arrayWord.includes(letter)) {
        arrayWord.forEach(function(el, index) {
          if (el.toUpperCase() === letter.toUpperCase()) {
            emptyWord[index] = letter.toUpperCase();    
            //  return attempts + " " + emptyWord.join(" ");         
       }
          
        });
      } else {
        attempts--;
        
        // return attempts + " " + emptyWord.join(" ");
      }
     
    //   console.log(attempts);
      if (!emptyWord.includes("-")) {
        win();
      }

      if (attempts == 0) {
        lose();
      }
    //    console.log(attempts + " " + emptyWord.join(" "));  
    }

    function guessWord(letter) {
      if (letter === word) {
        win();
      } else {
        lose();
      }
    }
}

Hangman.prototype.try = function(charOrWord) {
    // TODO
};