// DEF : Create a function that returns camelCase STRING into lowercase separated STRING.
// SPECS :  split each word started with uppercase character or number (i.e 1st,2nd,3rd,...7th)


function camelCase( _string ){
    
    // If input type is different from expected STRING type, or contains illegal symbol, exits throwing error message.
    if ( typeof _string !== 'string' ||  (/[^\d\w]/g).test( _string) ) return 'ERROR: OUT of SPECS' ;

    var _range = {
                alpha    : [ 'A', 'Z' ],
                numeric  : [  0 ,  9  ],
                },
        test = new Compare( _string , _range.alpha , _range.numeric, _range.tempArray ) , result ;

    //Constructor of model Compare( string, array range A, array range B, temporal array to fetch unicode conversions )
    function Compare( _char , _rangeAlpha, _rangeNumeric , _tempArray ){
        this._char = _char;
        this._rangeAlpha = _rangeAlpha;
        this._rangeNumeric = _rangeNumeric;
        this._tempArray = _tempArray;
    }

    // This prototype iterates over each array, translating each element to unicode value.
    // RETURNS the translated arrays;
    Compare.prototype.toUnicode = function(){
        this._tempArray.forEach(function( element, index, array ){  array[index] = element.toString().charCodeAt() });
        for( var props in _range ){
            _range[props].forEach(function( element, index, array ){ array[index] = element.toString().charCodeAt() });
        }
        return ;
    }

    // This prototype creates temporary array in _range Object and fetch it to _tempArray
    // RETURNS ARRAY containing each character of STRING converted to Unicode
    Compare.prototype.prepare = function(){
        _range.tempArray = [];
        for( var chars in this._char ){
            _range.tempArray.push( this._char[ chars ] );
        }
        this._tempArray = _range.tempArray ; delete _range.tempArray ;
        this.toUnicode() ;
        return ;
    }

    // This prototype builds the statement and launch all the tests
    // RETURNS STRING containing the result of the test
    Compare.prototype.build = function(){
        this.prepare();
        var result = '';
        for( var i = 0 ; i < this._tempArray.length ; i++ ){
            result += ( this.evaluate( this._tempArray[i] , i ) ? ' ' : '' ) + this._char[ i ].toLowerCase();
        }
        return result ;
    }

    // This prototype evaluates if each unicode value passed are between the range( alpha , numeric...) declared in _range object
    // and in case of the numeric range test if the character before is another number.
    // RETURNS true if match, or false if not.
    Compare.prototype.evaluate = function( _charToEval , idx ){
        return ( _charToEval >= this._rangeAlpha[0]   && _charToEval <= this._rangeAlpha[1]   ) ||
              ( ( _charToEval >= this._rangeNumeric[0] && _charToEval <= this._rangeNumeric[1] ) && isNaN(this._char[ idx - 1 ] ) );
    }

    result = test.build();
    return result ;
}