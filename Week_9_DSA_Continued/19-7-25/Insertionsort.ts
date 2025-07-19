//tail columbe optimiation

class Insertionsort {
    arr: number[];

    constructor(arr: number[]) {
        this.arr = arr;
    }

    public InsertionSort(): number[] {
        const n = this.arr.length;

        for (let i = 1; i < n; i++) {
            const key = this.arr[i];
            let j = i - 1; 

            while (j >= 0 && this.arr[j] > key) {
                this.arr[j + 1] = this.arr[j]; 
                j--;
            }
            if (this.arr[j + 1] !== key) { // Check if the key is not already in place
                this.arr[j + 1] = key; // Insert the key in the correct position
            }
            
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

// Test cases for Insertion Sort
console.log("=== Insertion Sort Algorithm ===\n");

// Test case 1: Unsorted array
console.log("Test 1 - Unsorted Array:");
const insertionUnsortedArray = [64, 25, 12, 22, 11];
console.log(`Original: [${insertionUnsortedArray.join(", ")}]`);
const insertionSort1 = new Insertionsort([...insertionUnsortedArray]);
const insertionSorted1 = insertionSort1.InsertionSort();
console.log(`Sorted:   [${insertionSorted1.join(", ")}]`);
console.log();

// Test case 2: Already sorted array (best case)
console.log("Test 2 - Already Sorted Array (Best Case):");
const insertionSortedArray = [1, 2, 3, 4, 5];
console.log(`Original: [${insertionSortedArray.join(", ")}]`);
const insertionSort2 = new Insertionsort([...insertionSortedArray]);
const insertionSorted2 = insertionSort2.InsertionSort();
console.log(`Sorted:   [${insertionSorted2.join(", ")}]`);
console.log();

// Test case 3: Reverse sorted array (worst case)
console.log("Test 3 - Reverse Sorted Array (Worst Case):");
const insertionReverseArray = [5, 4, 3, 2, 1];
console.log(`Original: [${insertionReverseArray.join(", ")}]`);
const insertionSort3 = new Insertionsort([...insertionReverseArray]);
const insertionSorted3 = insertionSort3.InsertionSort();
console.log(`Sorted:   [${insertionSorted3.join(", ")}]`);
console.log();

// Test case 4: Array with duplicates
console.log("Test 4 - Array with Duplicates:");
const insertionDuplicateArray = [3, 7, 3, 1, 7, 1, 5];
console.log(`Original: [${insertionDuplicateArray.join(", ")}]`);
const insertionSort4 = new Insertionsort([...insertionDuplicateArray]);
const insertionSorted4 = insertionSort4.InsertionSort();
console.log(`Sorted:   [${insertionSorted4.join(", ")}]`);
console.log();

// Test case 5: Single element array
console.log("Test 5 - Single Element:");
const insertionSingleArray = [42];
console.log(`Original: [${insertionSingleArray.join(", ")}]`);
const insertionSort5 = new Insertionsort([...insertionSingleArray]);
const insertionSorted5 = insertionSort5.InsertionSort();
console.log(`Sorted:   [${insertionSorted5.join(", ")}]`);
console.log();

// Test case 6: Two elements
console.log("Test 6 - Two Elements:");
const insertionTwoArray = [3, 1];
console.log(`Original: [${insertionTwoArray.join(", ")}]`);
const insertionSort6 = new Insertionsort([...insertionTwoArray]);
const insertionSorted6 = insertionSort6.InsertionSort();
console.log(`Sorted:   [${insertionSorted6.join(", ")}]`);
console.log();

// Test case 7: Negative numbers
console.log("Test 7 - Negative Numbers:");
const insertionNegativeArray = [-5, -2, -8, -1, -9];
console.log(`Original: [${insertionNegativeArray.join(", ")}]`);
const insertionSort7 = new Insertionsort([...insertionNegativeArray]);
const insertionSorted7 = insertionSort7.InsertionSort();
console.log(`Sorted:   [${insertionSorted7.join(", ")}]`);
console.log();

// Test case 8: Mixed positive and negative
console.log("Test 8 - Mixed Numbers:");
const insertionMixedArray = [-3, 5, -1, 8, 0, -7, 2];
console.log(`Original: [${insertionMixedArray.join(", ")}]`);
const insertionSort8 = new Insertionsort([...insertionMixedArray]);
const insertionSorted8 = insertionSort8.InsertionSort();
console.log(`Sorted:   [${insertionSorted8.join(", ")}]`);
console.log();

// Test case 9: Empty array
console.log("Test 9 - Empty Array:");
const insertionEmptyArray: number[] = [];
console.log(`Original: [${insertionEmptyArray.join(", ")}]`);
const insertionSort9 = new Insertionsort([...insertionEmptyArray]);
const insertionSorted9 = insertionSort9.InsertionSort();
console.log(`Sorted:   [${insertionSorted9.join(", ")}]`);
console.log();

console.log("=== Algorithm Analysis ===");
console.log("Time Complexity:");
console.log("  - Best Case:  O(n) - when array is already sorted");
console.log("  - Average Case: O(n²) - random order");
console.log("  - Worst Case: O(n²) - reverse sorted");
console.log("Space Complexity: O(1) - in-place sorting");
console.log("Stability: Stable - maintains relative order of equal elements");
console.log("Adaptive: Yes - performs better on partially sorted arrays");
console.log();

console.log("=== How Insertion Sort Works ===");
console.log("1. Start from the second element (index 1)");
console.log("2. Compare current element with previous elements");
console.log("3. Shift larger elements to the right");
console.log("4. Insert current element in correct position");
console.log("5. Repeat for all elements");
console.log();

console.log("=== Key Characteristics ===");
console.log("• Efficient for small datasets");
console.log("• Adaptive - O(n) performance on nearly sorted arrays");
console.log("• Stable - preserves relative order of equal elements");
console.log("• In-place - requires only O(1) additional memory");
console.log("• Online - can sort list as it receives it");
console.log("• Simple implementation and intuitive algorithm");

