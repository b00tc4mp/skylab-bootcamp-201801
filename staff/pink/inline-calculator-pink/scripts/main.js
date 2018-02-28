function calc(num) {
  function sum(num2) {
    num = num + num2;

    return this;
  }

  function rest(num3) {
    num = num - num3;

    return this;
  }

  function mult(num3) {
    num = num * num3;

    return this;
  }

  function result() {
    return num;
  }

  return {
    sum: sum,
    rest: rest,
    mult: mult,
    result: result
  };
}

console.log(
  calc(4)
    .sum(3)
    .rest(5)
    .mult(2)
    .result()
);
