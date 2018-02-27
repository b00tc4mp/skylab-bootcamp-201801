function* idMaker(){
    var index = 0;
    while(index < 3)
      yield index++;
  }
  
  var gen = idMaker();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // undefined

//====== OTHER EXAMPLE ======\\

function* fibonacciMaker(){
    let a=0, b=1
    
    while (true) {
        let f = a
        a = b
        b = f + a
        let reset = yield f
        if (reset) a = 0, b = 1
    }
}

const fibo = fibonacciMaker()

fibo.next()
fibo.next(true) //reset fibonacci
