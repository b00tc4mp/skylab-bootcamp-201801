//// Other Example
var num;
(function() {
  function sum(_num, val) {
    return _num + val;
  }

  function minor(_num, val) {
    return _num - val;
  }

  function mult(_num, val) {
    return _num * val;
  }

  function div(_num, val) {
    return _num / val;
  }

  num = function(_num) {
    var numObj = new Number(_num);

    numObj.sum = function(val) {
      return num(sum(_num, val));
    };

    numObj.minor = function(val) {
      return num(minor(_num, val));
    };

    numObj.mult = function(val) {
      return num(mult(_num, val));
    };

    numObj.div = function(val) {
      return num(div(_num, val));
    };

    numObj.primValue = function() {
      return this + 0;
    };

    return numObj;
  };
})();

console.log(num(5).sum(10).div(2).primValue());
