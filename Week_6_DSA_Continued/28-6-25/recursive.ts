/**
 * Mathematical utility class for recursive calculations.
 * 
 * @author Your Name
 * @version 1.0.0
 */
export class MathUtils {
    /**
     * Calculates the factorial of a given number using recursion.
     * 
     * @param n - The number to calculate factorial for (must be non-negative)
     * @returns The factorial of n, or 1 if n is 0, or throws error for negative numbers
     * @throws {Error} When n is negative
     * 
     * @example
     * ```typescript
     * const result = MathUtils.factorial(5); // Returns 120
     * ```
     */
    public static factorial(n: number): number {
        if (n < 0) {
            throw new Error('Factorial is not defined for negative numbers');
        }
        
        if (n === 0 || n === 1) {
            return 1;
        }
        
        return n * this.factorial(n - 1);
    }
}

// Example usage - always run in Deno
try {
    const number = 5;
    const result = MathUtils.factorial(number);
    console.log(`Factorial of ${number} is ${result}`);
    
    // Test with different values
    console.log(`Factorial of 0 is ${MathUtils.factorial(0)}`);
    console.log(`Factorial of 3 is ${MathUtils.factorial(3)}`);
    console.log(`Factorial of 7 is ${MathUtils.factorial(7)}`);
} catch (error) {
    console.error('Error:', error.message);
}