(function() {
  //// CHALLENGE ALEX

  function calc(num) {
    return {
      sum: function(othernum) {
        num += othernum;
        return this;
      },
      rest: function(othernum) {
        num -= othernum;
        return this;
      },
      mult: function(othernum) {
        num *= othernum;
        return this;
      },
      res: function() {
        return num;
      }
    };
  }

  var result = calc(4)
    .sum(3)
    .rest(5)
    .mult(2)
    .res();

  console.log(result);
})();
