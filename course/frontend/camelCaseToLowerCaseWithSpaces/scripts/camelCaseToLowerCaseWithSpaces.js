function camelCaseToLowerCaseWithSpaces(_word) {
    try {
        if (_word === '' || !_word instanceof String ){
            throw Error("erorr")
        }
        var exp = /[A-Z0-9=*()/&$%·"!-:;<>{}^*]/g
        return _word.split("").map(function(el){
            return el.match(exp) ? " " + el.toLowerCase() : el
        }).join("")
        
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