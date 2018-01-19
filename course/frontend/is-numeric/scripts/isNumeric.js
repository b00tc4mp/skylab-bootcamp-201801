function isNumeric (el){
    var regex = /[\d|,|.|e|E|\+]+/g;
    try{
        return  !!el.match(regex)
    } catch(err) {
        return false
    }
    
}
