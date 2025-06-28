class fibonaci {
    // Function to calculate the nth Fibonacci number using recursion
    public static fib(n: number): number {
        if (n < 0) {
            throw new Error('Fibonacci is not defined for negative numbers');
        }
        // Base case: if n is 0 or 1, return n
        if (n <= 1) {
            return n;
        }
        // Recursive case: return the sum of the two preceding Fibonacci numbers
        return this.fib(n - 1) + this.fib(n - 2);
    }
    
}


class fibonaciSeries {
    // Function to generate the Fibonacci series up to n terms
    public static generateSeries(n: number): number[] {
        if (n < 0) {
            throw new Error('Fibonacci series is not defined for negative numbers');
        }
        const series: number[] = [];
        for (let i = 0; i < n; i++) {
            series.push(fibonaci.fib(i));
        }
        return series;
    }
}

let n = 10; // Example input
try {
    console.log(`Fibonacci of ${n} is ${fibonaci.fib(n)}`);
    console.log(`Fibonacci Series of ${n} is ${fibonaciSeries.generateSeries(n)}`);
} catch (error) {
    console.error('Error:', (error as Error).message);
}