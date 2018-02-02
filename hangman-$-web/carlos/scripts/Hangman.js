function Hangman(word, attemps) {
  var cadena = [];
  for (var i = 0; i < word.length; i++) {
    cadena.push("_");
  }
  var play = true;
  var ok = false;
  this.try = function(charOrWord) {
    var message = "";
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
          cadena.indexOf("_") === -1
            ? ((message = cadena.join(" ") + " // Very Well you acerted"),
              (play = false))
            : ((ok = false), (message = attemps + " " + cadena.join(" ")));
        } else {
          --attemps;
          attemps === 0
            ? ((message =
                "Sorry, you have not guessed... the correct word is " +
                word.toUpperCase() +
                "."),
              (play = false))
            : (message = attemps + " " + cadena.join(" "));
        }
      } else {
        // QUERY all this logic could be processed in one function?
        play = false;
        return charOrWord === word
          ? "You have guessed the word, well done!"
          : "Sorry, you have not guessed... the correct word is " +
              word.toUpperCase() +
              ".";
      }
    } else {
      message = "GAME OVER.";
    }
    return {
      cadena: cadena,
      attemps: attemps
    };
  };
}
