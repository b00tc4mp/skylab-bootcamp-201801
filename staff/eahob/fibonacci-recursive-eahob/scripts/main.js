(() => {
    function test(callback, numberToTest) {
        let t = performance.now()
        console.log(`Fibonacci ${numberToTest}:`, callback(numberToTest))
        t = performance.now() - t
        console.log(`${callback.name}(${numberToTest}) executes in ${t} miliseconds and has in memory ${callback.answers.filter(function (value) { return value !== undefined }).length} elements`)
    }
    let N = 35
    test(fibonacci, N)
    test(fibonacci, N + 1)
    test(fibonacci, N)
    test(fibonacciMem, N)
    test(fibonacciMem, N + 1)
    test(fibonacciMem, N)
    test(fibonacciFor, N)
    test(fibonacciFor, N + 1)
    test(fibonacciFor, N)
    test(fibonacciFor2, N)
    test(fibonacciFor2, N + 1)
    test(fibonacciFor2, N)
})()
