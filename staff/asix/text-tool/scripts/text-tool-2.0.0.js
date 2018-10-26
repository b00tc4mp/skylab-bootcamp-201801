/**
 * Text tool
 * 
 * @version 2.0.0
 */

var text;
(function () {
  function wrap(text, before, after) {
    return (before || '') + text + (after || before || '');
  }

  text = function (_text) {
    var __text = new String(_text);

    __text.wrap = function (before, after) {
      return text(wrap(_text, before, after));
    }

    return __text;
  }
})();