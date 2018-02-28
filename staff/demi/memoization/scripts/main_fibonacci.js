// CHALLENGE --> Efectuar una función, que admita una posición (numero), y devuelva el numero fibonacci
// Memoization

// function fibonacci(10) // Return, el numero fibonacci --> 34
//la sucesion empieza con 0 y 1

// «cada término es la suma de los dos anteriores»
// 0, 1,1 2

let fibonacci = number => {
    let fiboArr = [];
    let initialNumber0 = 0;
    for(let i = 0; i<number; i++){
        let result;
        i < 2 ? (result = 0 + initialNumber0, initialNumber0++) : result = fiboArr[fiboArr.length-1] + fiboArr[fiboArr.length-2]
        fiboArr.push(result)
    }
    return fiboArr.pop()  
}
console.log(fibonacci(10))

///
const fibonnacci = (number) => {
    let cache = {};
    let fiboArr = [];
    let initialNumber0 = 0;

    return (n) => {
        if (n in cache) {
            console.log('from cache');
            return cache[n];
        }
        else {

            for(let i = 0; i<number; i++){
                let result;
                i < 2 ? (result = 0 + initialNumber0, initialNumber0++) : result = fiboArr[fiboArr.length-1] + fiboArr[fiboArr.length-2]
                fiboArr.push(result)
            }

            result = fiboArr.pop()  
            cache[n] = result;
            console.log('from calculation');
            return result;

        }
    }
}
var fibonacciResult = fibonnacci(9);
console.log(fibonacciResult(9)); // calculated
console.log(fibonacciResult(9)); // cached

console.log(fibonacciResult(10)); // calculated
console.log(fibonacciResult(10)); // cached