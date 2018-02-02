
class Game{
    constructor (word, attemps){
        this.attemps = attemps;
        this.word = word.toLowerCase();
        this.correctLetters = []
    }

}

class Hangman extends Game {
  constructor(attemps, word) {
    super(attemps, word); // envia a la clase padre
  }

  try(string) {     //clase no hace falta =
    if (string) {
      //filtar por si fuera diferente a un string, si no devuelve  "NO MORE ATTEMPS, GAME OVER"
      this.attemps--;

      if (this.attemps >= 0)
        return string.length > 1 ? this.allWord(string) : this.letter(string); // si hay intentos y dependiendo de tamaño te vas a una funcion u otra

      return console.error("NO MORE ATTEMPS, GAME OVER");
    }

    return console.error("no letter inputed");

  }
  print() {
    var arrWor = this.word.split(""); // genera los espacios?

    return arrWor
      .map(letter => {
        return this.correctLetters.includes(letter) ? letter : "_"; // cambia el espacio por la letra. Igual que le linea 21
      })
      .join(" ");
  }

  letter(_string) {
    const string = _string.toLocaleLowerCase(); //  toLowerCase() no es igual?

    if (this.word.includes(string)) {
      // si la palabra incluye algo del string
      const currentWordUser = this.word
        .split("")
        .map(letter => { //  paso a array, lo mapeas, pregunto si el elemento mapeado es el correcto o no y hace un join
          return this.correctLetters.includes(letter) ? letter : "_"; // y hace un join.
        })
        .join("");

      this.correctLetters.push(string);
      if (currentWordUser == this.word) {
        this.attemps = 0;
        return "You WIN! the Word is " + this.word;
      }
      console.log("Nice! " + string + " is correct letter! ");

      return this.attemps + ") " + this.print();
    }

    console.log("Nop... Try again...");
    return this.attemps + ") " + this.print();
  }

  allWord (_string) {
    const string = _string.toLocaleLowerCase();

    if (string === this.word) {
      this.attemps = 0;
      return "You WIN! the Word is " + this.word;
    }
    console.log(
      "Too bad... you " +
        (this.attemps >= 0 ? "only have " + this.attemps : "lost noob")
    );
    return this.attemps + ") " + this.print(); // ERROR: no se puede continuar después de dar un nombre erroneo.
  };
}



var newGame = new Hangman("Hello", 10)