// TODO
function camelCaseToLowerCaseWithSpaces(word) {
    var newWord = ''
    var exp = /[A-Z0-9=*()/&$%!<>{}*]/g
    try {
        if (word === '' || typeof(word) !== "string") throw new Error("erorr")
        
        newWord += word[0].toLowerCase()
        for (let i = 1; i < word.length; i++) {
            newWord += (word[i].match(exp)) ? " " + word[i].toLowerCase() : word[i]
        }
        return newWord
    } catch (err) {
        return false
    }
}
//Puedes poner isNumeric como un polyfield de String, copia esto esn tu codigo: 
/*
Function.prototype.camelCaseToLowerCaseWithSpaces = function () {
    return camelCaseToLowerCaseWithSpaces(this.name)
}
*/