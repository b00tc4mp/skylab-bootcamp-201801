/**
 * Text tool
 * 
 * @version 2.0.0b
 */

var text;
(function () {
  function wrap(text, before, after) {
    return (before || '') + text + (after || before || '');
  }

  function doOnChars(text,operationOnChars) {
    let newText = '';
    for (let index in text) {
      newText += operationOnChars(text[index]);
    }
    return newText;
  }

  function charInBrackets(char) {
    return char !== " " ? "[" + char + "]" : char;
  }

  text = function (_text) {
    var __text = new String(_text);

    __text.wrap = function (before, after) {
      return text(wrap(_text, before, after));
    }

    __text.doOnChars = function () {
      return text(doOnChars(_text,charInBrackets));
    }

    return __text;
  }
})();

console.log(text('something').wrap('$').wrap('[', ']').wrap('{', '}').wrap('<', '>').wrap('#').doOnChars().toString())
