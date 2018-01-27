//Function that detects if a string has any symbol (e.g. hasSymbol('hello%') => true).
// RETURN true if any, otherwise false.
'use strict'
function hasSymbol( _string ){
	try{
		if( typeof _string !== 'string' || _string.length === 0 ||	(/[\n\t]/g).test( _string) )  throw new Error(e);
	}catch(e){
		return 'ERROR: OUT of SPECS' ;
	}
	var re = /[^\d\w\sñç]/ig ;
	return ( re.exec( _string ) !== null );
};
