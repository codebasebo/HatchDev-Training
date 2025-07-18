class MinMax {
    private arr: number[];

    constructor(arr: number[]) {
        this.arr = arr;
    }

    // public findMin(): number {
    //     if (this.arr.length === 0) {
    //         throw new Error("Array is empty");
    //     }
    //     let min = this.arr[0];
    //     for (let i = 1; i < this.arr.length; i++) {
    //         if (this.arr[i] < min) {
    //             min = this.arr[i];
    //         }
    //     }
    //     return min;
    // }

    // public findMax(): number {
    //     if (this.arr.length === 0) {
    //         throw new Error("Array is empty");
    //     }
    //     let max = this.arr[0];
    //     for (let i = 1; i < this.arr.length; i++) {
    //         if (this.arr[i] > max) {
    //             max = this.arr[i];
    //         }
    //     }
    //     return max;
    // }

    public findMinAndMax(): { arr: number[]} {
        if (this.arr.length === 0) {
            throw new Error("Array is empty");
        }
        let min = this.arr[0];
        let max = this.arr[0];
        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i] > max) {
                max = this.arr[i];
            } else if (this.arr[i] < min) {
                min = this.arr[i];
            }
        }
        return { arr: [min, max] };
    }


    public display(): void {
        console.log(`Array: ${this.arr}`);
    }
}

// Test cases for Find Min and Max
console.log("=== Find Min and Max Algorithm ===\n");

// Test case 1: Regular array
console.log("Test 1 - Regular Array:");
const regularArray = [64, 34, 25, 12, 22, 11, 90, 5];
console.log(`Array: [${regularArray.join(", ")}]`);
const minMax1 = new MinMax(regularArray);
const result1 = minMax1.findMinAndMax();
console.log(`Min: ${result1.arr[0]}, Max: ${result1.arr[1]}`);
console.log();

// Test case 2: Single element array
console.log("Test 2 - Single Element:");
const singleMinMaxArray = [42];
console.log(`Array: [${singleMinMaxArray.join(", ")}]`);
const minMax2 = new MinMax(singleMinMaxArray);
const result2 = minMax2.findMinAndMax();
console.log(`Min: ${result2.arr[0]}, Max: ${result2.arr[1]}`);
console.log();

// Test case 3: Array with duplicates
console.log("Test 3 - Array with Duplicates:");
const duplicateMinMaxArray = [5, 2, 8, 2, 9, 1, 5, 5];
console.log(`Array: [${duplicateMinMaxArray.join(", ")}]`);
const minMax3 = new MinMax(duplicateMinMaxArray);
const result3 = minMax3.findMinAndMax();
console.log(`Min: ${result3.arr[0]}, Max: ${result3.arr[1]}`);
console.log();

// Test case 4: Already sorted array
console.log("Test 4 - Sorted Array:");
const sortedMinMaxArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Array: [${sortedMinMaxArray.join(", ")}]`);
const minMax4 = new MinMax(sortedMinMaxArray);
const result4 = minMax4.findMinAndMax();
console.log(`Min: ${result4.arr[0]}, Max: ${result4.arr[1]}`);
console.log();

// Test case 5: Reverse sorted array
console.log("Test 5 - Reverse Sorted Array:");
const reverseMinMaxArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(`Array: [${reverseMinMaxArray.join(", ")}]`);
const minMax5 = new MinMax(reverseMinMaxArray);
const result5 = minMax5.findMinAndMax();
console.log(`Min: ${result5.arr[0]}, Max: ${result5.arr[1]}`);
console.log();

// Test case 6: Negative numbers
console.log("Test 6 - Negative Numbers:");
const negativeArray = [-5, -2, -8, -1, -9, -3];
console.log(`Array: [${negativeArray.join(", ")}]`);
const minMax6 = new MinMax(negativeArray);
const result6 = minMax6.findMinAndMax();
console.log(`Min: ${result6.arr[0]}, Max: ${result6.arr[1]}`);
console.log();

// Test case 7: Mixed positive and negative
console.log("Test 7 - Mixed Positive and Negative:");
const mixedArray = [-10, 5, -3, 8, 0, -1, 12];
console.log(`Array: [${mixedArray.join(", ")}]`);
const minMax7 = new MinMax(mixedArray);
const result7 = minMax7.findMinAndMax();
console.log(`Min: ${result7.arr[0]}, Max: ${result7.arr[1]}`);
console.log();

// Test case 8: Large numbers
console.log("Test 8 - Large Numbers:");
const largeMinMaxArray = [1000000, 500000, 2000000, 100000, 1500000];
console.log(`Array: [${largeMinMaxArray.join(", ")}]`);
const minMax8 = new MinMax(largeMinMaxArray);
const result8 = minMax8.findMinAndMax();
console.log(`Min: ${result8.arr[0]}, Max: ${result8.arr[1]}`);
console.log();

// Test case 9: Two elements
console.log("Test 9 - Two Elements:");
const twoMinMaxArray = [3, 1];
console.log(`Array: [${twoMinMaxArray.join(", ")}]`);
const minMax9 = new MinMax(twoMinMaxArray);
const result9 = minMax9.findMinAndMax();
console.log(`Min: ${result9.arr[0]}, Max: ${result9.arr[1]}`);
console.log();

// Test case 10: Error handling for empty array
console.log("Test 10 - Empty Array (Error Handling):");
try {
    const emptyArray: number[] = [];
    console.log(`Array: [${emptyArray.join(", ")}]`);
    const minMax10 = new MinMax(emptyArray);
    const result10 = minMax10.findMinAndMax();
    console.log(`Min: ${result10.arr[0]}, Max: ${result10.arr[1]}`);
} catch (error) {
    console.log(`Error: ${(error as Error).message}`);
}
console.log();

console.log("=== Algorithm Analysis ===");
console.log("Time Complexity: O(n) - single pass through the array");
console.log("Space Complexity: O(1) - constant extra space");
console.log("Approach: Linear scan with simultaneous min/max tracking");
console.log("Optimization: Combined search reduces comparisons vs separate min/max functions");
console.log();

console.log("=== How Find Min and Max Works ===");
console.log("1. Initialize both min and max to the first element");
console.log("2. Iterate through the array starting from index 1");
console.log("3. For each element, compare with current max and min");
console.log("4. Update max if current element is greater");
console.log("5. Update min if current element is smaller");
console.log("6. Return both values in a single pass");