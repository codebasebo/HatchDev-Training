class selectionSort {
    arr: number[];

    constructor(arr: number[]) {
        this.arr = arr;
    }

    public selectionSort(): number[] {
        const n = this.arr.length;

        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;

            for (let j = i + 1; j < n; j++) {
                if (this.arr[j] < this.arr[minIndex]) {
                    minIndex = j;
                }
            }
            // Swap the found minimum element with the first element
            [this.arr[i], this.arr[minIndex]] = [this.arr[minIndex], this.arr[i]];
            
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

// Test cases for Selection Sort
console.log("=== Selection Sort Algorithm ===\n");

// Test case 1: Unsorted array
console.log("Test 1 - Unsorted Array:");
const selectionUnsortedArray = [64, 25, 12, 22, 11];
console.log(`Original: [${selectionUnsortedArray.join(", ")}]`);
const selectionSort1 = new selectionSort([...selectionUnsortedArray]);
const selectionSorted1 = selectionSort1.selectionSort();
console.log(`Sorted:   [${selectionSorted1.join(", ")}]`);
console.log();

// Test case 2: Already sorted array
console.log("Test 2 - Already Sorted Array:");
const selectionSortedArray = [1, 2, 3, 4, 5];
console.log(`Original: [${selectionSortedArray.join(", ")}]`);
const selectionSort2 = new selectionSort([...selectionSortedArray]);
const selectionSorted2 = selectionSort2.selectionSort();
console.log(`Sorted:   [${selectionSorted2.join(", ")}]`);
console.log();

// Test case 3: Reverse sorted array (worst case)
console.log("Test 3 - Reverse Sorted Array:");
const selectionReverseArray = [5, 4, 3, 2, 1];
console.log(`Original: [${selectionReverseArray.join(", ")}]`);
const selectionSort3 = new selectionSort([...selectionReverseArray]);
const selectionSorted3 = selectionSort3.selectionSort();
console.log(`Sorted:   [${selectionSorted3.join(", ")}]`);
console.log();

// Test case 4: Array with duplicates
console.log("Test 4 - Array with Duplicates:");
const selectionDuplicateArray = [3, 7, 3, 1, 7, 1, 5];
console.log(`Original: [${selectionDuplicateArray.join(", ")}]`);
const selectionSort4 = new selectionSort([...selectionDuplicateArray]);
const selectionSorted4 = selectionSort4.selectionSort();
console.log(`Sorted:   [${selectionSorted4.join(", ")}]`);
console.log();

// Test case 5: Single element array
console.log("Test 5 - Single Element:");
const selectionSingleArray = [42];
console.log(`Original: [${selectionSingleArray.join(", ")}]`);
const selectionSort5 = new selectionSort([...selectionSingleArray]);
const selectionSorted5 = selectionSort5.selectionSort();
console.log(`Sorted:   [${selectionSorted5.join(", ")}]`);
console.log();

// Test case 6: Two elements
console.log("Test 6 - Two Elements:");
const selectionTwoArray = [3, 1];
console.log(`Original: [${selectionTwoArray.join(", ")}]`);
const selectionSort6 = new selectionSort([...selectionTwoArray]);
const selectionSorted6 = selectionSort6.selectionSort();
console.log(`Sorted:   [${selectionSorted6.join(", ")}]`);
console.log();

// Test case 7: Negative numbers
console.log("Test 7 - Negative Numbers:");
const selectionNegativeArray = [-5, -2, -8, -1, -9];
console.log(`Original: [${selectionNegativeArray.join(", ")}]`);
const selectionSort7 = new selectionSort([...selectionNegativeArray]);
const selectionSorted7 = selectionSort7.selectionSort();
console.log(`Sorted:   [${selectionSorted7.join(", ")}]`);
console.log();

// Test case 8: Mixed positive and negative
console.log("Test 8 - Mixed Numbers:");
const selectionMixedArray = [-3, 5, -1, 8, 0, -7, 2];
console.log(`Original: [${selectionMixedArray.join(", ")}]`);
const selectionSort8 = new selectionSort([...selectionMixedArray]);
const selectionSorted8 = selectionSort8.selectionSort();
console.log(`Sorted:   [${selectionSorted8.join(", ")}]`);
console.log();

// Test case 9: Large array
console.log("Test 9 - Large Array:");
const selectionLargeArray = [89, 45, 68, 90, 29, 34, 17, 78, 23, 56];
console.log(`Original: [${selectionLargeArray.join(", ")}]`);
const selectionSort9 = new selectionSort([...selectionLargeArray]);
const selectionSorted9 = selectionSort9.selectionSort();
console.log(`Sorted:   [${selectionSorted9.join(", ")}]`);
console.log();

// Test case 10: Empty array
console.log("Test 10 - Empty Array:");
const selectionEmptyArray: number[] = [];
console.log(`Original: [${selectionEmptyArray.join(", ")}]`);
const selectionSort10 = new selectionSort([...selectionEmptyArray]);
const selectionSorted10 = selectionSort10.selectionSort();
console.log(`Sorted:   [${selectionSorted10.join(", ")}]`);
console.log();

console.log("=== Algorithm Analysis ===");
console.log("Time Complexity:");
console.log("  - Best Case:  O(n²) - even when array is sorted");
console.log("  - Average Case: O(n²) - random order");
console.log("  - Worst Case: O(n²) - reverse sorted");
console.log("Space Complexity: O(1) - in-place sorting");
console.log("Stability: Not stable - relative order of equal elements may change");
console.log("Adaptive: No - always performs the same number of comparisons");
console.log();

console.log("=== How Selection Sort Works ===");
console.log("1. Find the minimum element in the unsorted portion");
console.log("2. Swap it with the first element of the unsorted portion");
console.log("3. Move the boundary of unsorted portion by one position");
console.log("4. Repeat until the entire array is sorted");
console.log("5. Makes exactly n-1 swaps (minimum possible for comparison sorts)");
console.log();

console.log("=== Key Characteristics ===");
console.log("• Always makes O(n²) comparisons regardless of input");
console.log("• Makes minimum number of swaps: O(n)");
console.log("• Good when write operations are expensive");
console.log("• Simple implementation but not efficient for large datasets");