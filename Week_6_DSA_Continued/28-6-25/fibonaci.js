var fibonaci = /** @class */ (function () {
    function fibonaci() {
    }
    // Function to calculate the nth Fibonacci number using recursion
    fibonaci.fib = function (n) {
        if (n < 0) {
            throw new Error('Fibonacci is not defined for negative numbers');
        }
        // Base case: if n is 0 or 1, return n
        if (n <= 1) {
            return n;
        }
        // Recursive case: return the sum of the two preceding Fibonacci numbers
        return this.fib(n - 1) + this.fib(n - 2);
    };
    return fibonaci;
}());
var n = 10; // Example input
try {
    console.log("Fibonacci of ".concat(n, " is ").concat(fibonaci.fib(n)));
}
catch (error) {
    console.error('Error:', error.message);
}
