'use strict'
function hasSymbol( _string ){

	if ( typeof _string !== 'string' ||  ( _string.length > 1  || _string.length === 0 ) ||
		 (/[\s\n\t]/g).test( _string) ) return 'ERROR: OUT of SPECS' ;

	var re = /[^\d\wñç]/ig ;
	return ( re.exec( _string ) !== null );
};