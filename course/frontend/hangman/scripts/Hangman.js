function Hangman(word, attemps) {
  var word = word.toLocaleLowerCase();
  if (word && attemps) {
    var correctLetters = [];
    this.try = function(string) {
      var self = this;
      if (string) {
        attemps--;

        if (attemps >= 0)
          return string.length > 1 ? allWord(string) : letter(string);

        return "GAME OVER.";
      }

      return console.error("no letter inputed");
      //Clousure
      function letter(string) {
        var string = string.toLocaleLowerCase();
        
        if (word.includes(string)) {
          attemps++;
          var currentWordUser = word
            .split("")
            .map(function(el) {
              return correctLetters.includes(el) ? el : "_";
            })
            .join("");

          correctLetters.push(string);
          if (currentWordUser == word) {
            attemps = 0;
            return "You have guessed the word, well done!";
          }
          console.log("Nice! " + string + " is correct letter! ");
          return attemps + " " + self.print();
        }

        console.log("Nop... Try again...");
        return attemps + " " + self.print();
      }

      function allWord(string) {
        var string = string.toLocaleLowerCase();
        attemps = 0;
        if (string === word) {

            return "You have guessed the word, well done!";
        }
            return "Sorry, you have not guessed... the correct word is " + word.toUpperCase() +'.';
    }
    };

    this.print = function() {
      var arrWor = word.split("");

      return arrWor
        .map(function(el) {
          return correctLetters.includes(el) ? el.toUpperCase() : "_";
        })
        .join(" ");
    };
  } else {
    return console.error("no word or attemps inputed");
  }
}


