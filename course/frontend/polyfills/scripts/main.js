// test array polyfills

var a = [1, 2, 3];

a.forEach(function(v) {
    console.log(v);
});

// test string polyfills

var s = 'hola mundo';

console.log(s.singleQuotes());



// Another example:
/*
   * String.prototype.hashtag
   *
   * @returns {String} Formated string like hashtag.
*/
String.prototype.hashtag = function(){
	var text = this.trim();
	text = text.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	text = text.replace(/\s/g, '');
	return '#' + text;
}

var s = 'Skylab rocks';
console.log( s.hashtag() ); // SkylabRocks

console.log( "esto es un ejemplo".hashtag() ); // #EstoEsUnEjemplo