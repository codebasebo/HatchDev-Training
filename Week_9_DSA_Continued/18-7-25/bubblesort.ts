class BubbleArr {
    private arr: number[];

    constructor(arr: number[]) {
        this.arr = arr;

    }

    public bubbleSort(): number[] {
        const n = this.arr.length;
        let swapped: boolean;

        for (let i = 0; i < n; i++) {
            swapped = false;

            for (let j = 0; j < n - i - 1; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    // Swap the elements 
                    [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]];
                    swapped = true;
                }
            }

            if (!swapped) break; // If no elements were swapped, array is sorted
        }

        return this.arr;
    }

    public getArray(): number[] {
        return [...this.arr]; // Return a copy to avoid external modification
    }

    public display(): void {
        console.log(`Array: [${this.arr.join(", ")}]`);
    }
}

// Test cases for Bubble Sort
console.log("=== Bubble Sort Algorithm ===\n");

// Test case 1: Unsorted array
console.log("Test 1 - Unsorted Array:");
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(`Original: [${unsortedArray.join(", ")}]`);
const bubbleSort1 = new BubbleArr([...unsortedArray]);
const sorted1 = bubbleSort1.bubbleSort();
console.log(`Sorted:   [${sorted1.join(", ")}]`);
console.log();

// Test case 2: Already sorted array
console.log("Test 2 - Already Sorted Array:");
const sortedArray = [1, 2, 3, 4, 5];
console.log(`Original: [${sortedArray.join(", ")}]`);
const bubbleSort2 = new BubbleArr([...sortedArray]);
const sorted2 = bubbleSort2.bubbleSort();
console.log(`Sorted:   [${sorted2.join(", ")}]`);
console.log();

// Test case 3: Reverse sorted array (worst case)
console.log("Test 3 - Reverse Sorted Array (Worst Case):");
const reverseArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(`Original: [${reverseArray.join(", ")}]`);
const bubbleSort3 = new BubbleArr([...reverseArray]);
const sorted3 = bubbleSort3.bubbleSort();
console.log(`Sorted:   [${sorted3.join(", ")}]`);
console.log();

// Test case 4: Array with duplicates
console.log("Test 4 - Array with Duplicates:");
const duplicateArray = [5, 2, 8, 2, 9, 1, 5, 5];
console.log(`Original: [${duplicateArray.join(", ")}]`);
const bubbleSort4 = new BubbleArr([...duplicateArray]);
const sorted4 = bubbleSort4.bubbleSort();
console.log(`Sorted:   [${sorted4.join(", ")}]`);
console.log();

// Test case 5: Single element array
console.log("Test 5 - Single Element:");
const singleArray = [42];
console.log(`Original: [${singleArray.join(", ")}]`);
const bubbleSort5 = new BubbleArr([...singleArray]);
const sorted5 = bubbleSort5.bubbleSort();
console.log(`Sorted:   [${sorted5.join(", ")}]`);
console.log();

// Test case 6: Empty array
console.log("Test 6 - Empty Array:");
const emptyArray: number[] = [];
console.log(`Original: [${emptyArray.join(", ")}]`);
const bubbleSort6 = new BubbleArr([...emptyArray]);
const sorted6 = bubbleSort6.bubbleSort();
console.log(`Sorted:   [${sorted6.join(", ")}]`);
console.log();

// Test case 7: Two elements
console.log("Test 7 - Two Elements:");
const twoArray = [3, 1];
console.log(`Original: [${twoArray.join(", ")}]`);
const bubbleSort7 = new BubbleArr([...twoArray]);
const sorted7 = bubbleSort7.bubbleSort();
console.log(`Sorted:   [${sorted7.join(", ")}]`);
console.log();

// Test case 8: Large numbers
console.log("Test 8 - Large Numbers:");
const largeArray = [1000, 500, 2000, 100, 1500];
console.log(`Original: [${largeArray.join(", ")}]`);
const bubbleSort8 = new BubbleArr([...largeArray]);
const sorted8 = bubbleSort8.bubbleSort();
console.log(`Sorted:   [${sorted8.join(", ")}]`);
console.log();

console.log("=== Algorithm Analysis ===");
console.log("Time Complexity:");
console.log("  - Best Case:  O(n) - when array is already sorted");
console.log("  - Average Case: O(n²) - random order");
console.log("  - Worst Case: O(n²) - reverse sorted");
console.log("Space Complexity: O(1) - in-place sorting");
console.log("Stability: Stable - maintains relative order of equal elements");
console.log("Adaptive: Yes - performs better on nearly sorted arrays");
console.log();

console.log("=== How Bubble Sort Works ===");
console.log("1. Compare adjacent elements");
console.log("2. Swap if they are in wrong order");
console.log("3. Continue through the array");
console.log("4. Repeat until no swaps are needed");
console.log("5. Optimization: Stop early if no swaps occur in a pass");