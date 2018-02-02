class HangPredator {
    constructor(word) {
        this.word = word.toLowerCase()
        this.attemps = 10
        this.status = null
        this.correctLetters = [];
    }
    getStatus() { //getStatus
        return {
            word: this.word,
            attemps: this.attemps,
            print: this.print(),
            status: this.status,
            correctLetters : this.correctLetters
        }
    }
    try (string) {
        if (string && isNaN(string)) {
            if (this.attemps <= 0) {
                this.status = false;
                return this.getStatus()
            }
            return string.length > 1 ? this.inputedWord(string.toLowerCase()) : this.inputedLetter(string.toLowerCase())
        }
        this.status = 'error'
        return this.getStatus()
    }
    inputedWord(_word) {
        this.attemps = 0
        if (_word === this.word) {
            this.status = true
            _word.split("").map(el => this.correctLetters.push(el))
            return this.getStatus()
        }
        this.status = false
        return this.getStatus()
    }
    inputedLetter(_letter) {
        if (this.word.includes(_letter)) {
            this.correctLetters.push(_letter)
            this.status = true
            return this.getStatus()
        }

        this.attemps--;
        this.status = false
        return this.getStatus()
    }
    print() {
        return this.word.split("").map(el => (this.correctLetters.includes(el)) ? el : "_").join(" ")
    }
}