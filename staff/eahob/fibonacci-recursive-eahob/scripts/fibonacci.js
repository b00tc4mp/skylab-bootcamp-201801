function fibonacci(n) {
    if (!fibonacci.answers) fibonacci.answers = {};

    if (fibonacci.answers[n]) return fibonacci.answers[n];

    // WARN! it memoizes all smaller values up to the target one (n)

    return n > 0 ? (n != 1 ? fibonacci.answers[n] = fibonacci(n - 1) + fibonacci(n - 2) : 1) : 0
}