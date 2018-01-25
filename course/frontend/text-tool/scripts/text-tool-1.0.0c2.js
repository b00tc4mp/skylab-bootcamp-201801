/**
 * Text tool
 * 
 * @version 1.0.0c2
 */

var text;
(function () {
  function wrap(text, before, after) {
    return (before || '') + text + (after || before || '');
  }

  text = function (_text) {
    return {
      wrap: function (before, after) {
        return text(wrap(_text, before, after));
      },
      toString: function () {
        return _text;
      }
    };
  }
})();