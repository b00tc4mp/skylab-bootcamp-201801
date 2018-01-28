/**
 * Text tool
 * 
 * @version 1.0.0b2
 */

var Challenge = {
    text: function(somethig) {
      this.word = somethig;
      return this;
    },
   
    wrap: function(item,item2) {
      (item2 === undefined) ? this.word = item + this.word + item : this.word = item + this.word + item2;
      return this;
    },
 
    toString: function(){
      return this.word;
    }
 };

 console.log(Challenge.text('something').wrap('$').wrap('[', ']').wrap('{', '}').wrap('<', '>').wrap('#').toString())
 
 