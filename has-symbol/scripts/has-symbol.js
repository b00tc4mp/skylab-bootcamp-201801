//Function that detects if a string has any symbol (e.g. hasSymbol('hello%') => true).
// RETURN true if any, otherwise false.
'use strict'
function hasSymbol(_string){
	try{
		if( typeof _string === 'undefined' || !_string || _string.length === 0 ) throw new Error('No arguments provided.');
		if( arguments.length > 1 ) throw new Error('Only provide ONE argument.')
		if( typeof _string !== 'string') throw new Error('Argument provided must be a STRING primitive.');
		if( (/[\n\t\r]/g).test( _string) ) throw new Error('New line, carriage return or tab not allowed.');
	}catch(e){
		return e;
	}
	var re = /[^\d\w\sñç]/ig ;
	return ( re.exec( _string ) !== null );
};
