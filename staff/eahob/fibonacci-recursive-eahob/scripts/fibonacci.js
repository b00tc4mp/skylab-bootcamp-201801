function fibonacci(n) {
    if (!fibonacci.answers) fibonacci.answers = [];

    if (fibonacci.answers[n]) return fibonacci.answers[n];

    // WARN! it memoizes all smaller values up to the target one (n)

    return n > 0 ? (n != 1 ? fibonacci.answers[n] = fibonacci(n - 1) + fibonacci(n - 2) : 1) : 0
}

function fibonacciMem(n) {
    if (!fibonacciMem.answers) fibonacciMem.answers = []
    let f = n => n > 0 ? (n != 1 ? f(--n) + f(--n) : 1) : 0
    return fibonacciMem.answers[n] || (fibonacciMem.answers[n] = f(n))
}

function fibonacciFor(n) {
    if (!fibonacciFor.answers) fibonacciFor.answers = []
    let fn_2 = 0
    let fn_1 = 1
    let fn;
    for (let i = 1; i < n; i++) {
        fn = fn_1 + fn_2
        fn_2 = fn_1
        fn_1 = fn
    }
    return fibonacciFor.answers[n] || (fibonacciFor.answers[n] = fn) 
}

function fibonacciFor2(n) {
    if (!fibonacciFor2.answers) {
        fibonacciFor2.answers = []
        fibonacciFor2.answers[0] = 0
        fibonacciFor2.answers[1] = 1
    }
    if (fibonacciFor2.answers[n]) return fibonacciFor2.answers[n]
    for (let i=fibonacciFor2.answers.length; i<=n;i++){
        fibonacciFor2.answers[i] = fibonacciFor2.answers[i-1]+fibonacciFor2.answers[i-2]
    }
    return fibonacciFor2.answers[n]
}