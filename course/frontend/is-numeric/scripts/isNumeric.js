function isNumeric (el){
    var regex = /[\d|,|.|e|E|\+]+/g;
    try{
        return  !!el.match(regex)
    } catch(err) {
        return false
    }
}
//Puedes poner isNumeric como un polyfield de String, copia esto esn tu codigo: 
/*
String.prototype.isNumeric = function () {
    return isNumeric(this)
}
*/