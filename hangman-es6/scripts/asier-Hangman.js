class Hangman {
    constructor(word, attempts) {
        const w = word.split('')

        const underscore = new Array(w.length)
        let endGame = false;
 
        for (let i = 0; i < underscore.length; i++)
            underscore[i] = '_'
 
        const wins = charOrWord => charOrWord === word || underscore.join('') === word.toUpperCase()
 
        const loses = charOrWord => attempts === 0 || charOrWord.length > 1 && charOrWord !== word
 
        this.try = function (charOrWord) {
            if (endGame === false) {
                let check = false
                
                for (let i = 0; i < w.length; i++) {
                    if (charOrWord === w[i]) {
                        underscore[i] = w[i].toUpperCase()

                        check = true
                    }
                }

                if (check === true) {
                    check = false
                
                    if (wins(charOrWord)) {
                        endGame = true
                
                        return 'You have guessed the word, well done!'
                    } else {
                        return `${attempts} ${underscore.join(' ')}`
                        // return attempts +' '+ underscore.join(' ');
                    }
                } else if (wins(charOrWord)) {
                    endGame = true;

                    return 'You have guessed the word, well done!'
                } else {
                    attempts--

                    if (loses(charOrWord)) {
                        if (charOrWord.length > 1) {
                            endGame = true

                            return `Sorry, you have not guessed... the correct word is ${word.toUpperCase()}.`
                        } else {
                            endGame = true
                            
                            return `Sorry, you have not guessed... the correct word is ${word.toUpperCase()}.`
                        }
                    } else {
                        return `${attempts} ${underscore.join(' ')}`
                    }
                }
            } else {
                return 'GAME OVER.'
            }
        }
    }
 } 