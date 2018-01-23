'use strict'
function hasSymbol( _string ){

	if ( typeof _string !== 'string' ||   _string.length === 0  || (/[\n\t]/g).test( _string) )  return 'ERROR: OUT of SPECS' ;

	var re = /[^\s\d\wñç]/ig ;
	return ( re.exec( _string ) !== null );
};