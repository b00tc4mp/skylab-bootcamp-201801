function Hangman(word, attempts) {

    var w = word.split('');
    var rounds = attempts;
    var underscore = new Array(w.length)

    for (var i = 0; i < underscore.length; i++)
        underscore[i] = '_';

    function win(letter) {
        if (letter === word || underscore.join('') === word)
            return true;
    }

    function gameOver(letter) {
        if (attempts === 0) {
            return true;
        } else if (letter.length > 1 && letter != word){
            return true;
        }
        
    }

    this.try = function (letter) {
        var check = false;
        for (var i = 0; i < w.length; i++) {
            if (letter === w[i]) {
                underscore[i] = w[i];
                check = true;
            }
        }
        if (check === true) {
            check = false;
            if (win(letter)) {
                return 'Congratulations, you won! the word is ---> ' + word;
            } else {
                return 'Good job! you guessed right, '+ letter + ' is in the word. \nYou have '+attempts +' attempts remaining.'+ '\n' + underscore.join(' ');
            }
        } else if (win(letter)) {
            return 'congratulations, you won! the word is ---> ' + word;
        } else {
            attempts--;
            if (gameOver(letter)){
                if(letter.length > 1) {
                    return 'Too bad! ' + letter+ ' is not the word!! the word is '+word+ '\nGAME OVER'
                } else {
                    return 'Too bad! you have no more attempts, the word is: '+word+ '\nGAME OVER'
                }
            } else {
                return 'The letter '+ letter + ' is wrong. \nYou have ' + attempts +' attempts remaining.'+ '\n' + underscore.join(' ');
            }
            
        }

    }
}



var game = new Hangman('perro', 10);
console.log(game.try('i'));
console.log(game.try('t'));
console.log(game.try('e'));
console.log(game.try('z'));
console.log(game.try('z'));
console.log(game.try('z'));
console.log(game.try('z'));
console.log(game.try('vaca'));
//console.log(game.try('z'));
//console.log(game.try('z'));


//console.log(game.try('perro'));
//console.log(game.try('r'));
//console.log(game.try('e'));
//console.log(game.try('o'));