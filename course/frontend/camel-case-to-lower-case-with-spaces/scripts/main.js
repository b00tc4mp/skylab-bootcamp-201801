// TODO
function camelCaseToLowerCaseWithSpaces(_word) {
    var newWord = ''
    var exp = /[A-Z0-9=*()/&$%!<>{}*]/g
    try {
        if (_word === '' || typeof(_word) !== "string") throw new Error("erorr")
        
        newWord += _word[0].toLowerCase()
        for (let i = 1; i < _word.length; i++) {
            newWord += (_word[i].match(exp)) ? " " + _word[i].toLowerCase() : _word[i]
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