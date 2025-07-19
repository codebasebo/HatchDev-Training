//tail columbe optimiation
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Insertionsort = /** @class */ (function () {
    function Insertionsort(arr) {
        this.arr = arr;
    }
    Insertionsort.prototype.InsertionSort = function () {
        var n = this.arr.length;
        for (var i = 1; i < n; i++) {
            var key = this.arr[i];
            var j = i - 1;
            while (j >= 0 && this.arr[j] > key) {
                this.arr[j + 1] = this.arr[j];
                j--;
            }
            this.arr[j + 1] = key;
        }
        return this.arr;
    };
    Insertionsort.prototype.getArray = function () {
        return __spreadArray([], this.arr, true); // Return a copy to avoid external modification
    };
    Insertionsort.prototype.display = function () {
        console.log("Array: [".concat(this.arr.join(", "), "]"));
    };
    return Insertionsort;
}());
// Test cases for Insertion Sort
console.log("=== Insertion Sort Algorithm ===\n");
// Test case 1: Unsorted array
console.log("Test 1 - Unsorted Array:");
var insertionUnsortedArray = [64, 25, 12, 22, 11];
console.log("Original: [".concat(insertionUnsortedArray.join(", "), "]"));
var insertionSort1 = new Insertionsort(__spreadArray([], insertionUnsortedArray, true));
var insertionSorted1 = insertionSort1.InsertionSort();
console.log("Sorted:   [".concat(insertionSorted1.join(", "), "]"));
console.log();
// Test case 2: Already sorted array (best case)
console.log("Test 2 - Already Sorted Array (Best Case):");
var insertionSortedArray = [1, 2, 3, 4, 5];
console.log("Original: [".concat(insertionSortedArray.join(", "), "]"));
var insertionSort2 = new Insertionsort(__spreadArray([], insertionSortedArray, true));
var insertionSorted2 = insertionSort2.InsertionSort();
console.log("Sorted:   [".concat(insertionSorted2.join(", "), "]"));
console.log();
// Test case 3: Reverse sorted array (worst case)
console.log("Test 3 - Reverse Sorted Array (Worst Case):");
var insertionReverseArray = [5, 4, 3, 2, 1];
console.log("Original: [".concat(insertionReverseArray.join(", "), "]"));
var insertionSort3 = new Insertionsort(__spreadArray([], insertionReverseArray, true));
var insertionSorted3 = insertionSort3.InsertionSort();
console.log("Sorted:   [".concat(insertionSorted3.join(", "), "]"));
console.log();
// Test case 4: Array with duplicates
console.log("Test 4 - Array with Duplicates:");
var insertionDuplicateArray = [3, 7, 3, 1, 7, 1, 5];
console.log("Original: [".concat(insertionDuplicateArray.join(", "), "]"));
var insertionSort4 = new Insertionsort(__spreadArray([], insertionDuplicateArray, true));
var insertionSorted4 = insertionSort4.InsertionSort();
console.log("Sorted:   [".concat(insertionSorted4.join(", "), "]"));
console.log();
// Test case 5: Single element array
console.log("Test 5 - Single Element:");
var insertionSingleArray = [42];
console.log("Original: [".concat(insertionSingleArray.join(", "), "]"));
var insertionSort5 = new Insertionsort(__spreadArray([], insertionSingleArray, true));
var insertionSorted5 = insertionSort5.InsertionSort();
console.log("Sorted:   [".concat(insertionSorted5.join(", "), "]"));
console.log();
// Test case 6: Two elements
console.log("Test 6 - Two Elements:");
var insertionTwoArray = [3, 1];
console.log("Original: [".concat(insertionTwoArray.join(", "), "]"));
var insertionSort6 = new Insertionsort(__spreadArray([], insertionTwoArray, true));
var insertionSorted6 = insertionSort6.InsertionSort();
console.log("Sorted:   [".concat(insertionSorted6.join(", "), "]"));
console.log();
// Test case 7: Negative numbers
console.log("Test 7 - Negative Numbers:");
var insertionNegativeArray = [-5, -2, -8, -1, -9];
console.log("Original: [".concat(insertionNegativeArray.join(", "), "]"));
var insertionSort7 = new Insertionsort(__spreadArray([], insertionNegativeArray, true));
var insertionSorted7 = insertionSort7.InsertionSort();
console.log("Sorted:   [".concat(insertionSorted7.join(", "), "]"));
console.log();
// Test case 8: Mixed positive and negative
console.log("Test 8 - Mixed Numbers:");
var insertionMixedArray = [-3, 5, -1, 8, 0, -7, 2];
console.log("Original: [".concat(insertionMixedArray.join(", "), "]"));
var insertionSort8 = new Insertionsort(__spreadArray([], insertionMixedArray, true));
var insertionSorted8 = insertionSort8.InsertionSort();
console.log("Sorted:   [".concat(insertionSorted8.join(", "), "]"));
console.log();
// Test case 9: Empty array
console.log("Test 9 - Empty Array:");
var insertionEmptyArray = [];
console.log("Original: [".concat(insertionEmptyArray.join(", "), "]"));
var insertionSort9 = new Insertionsort(__spreadArray([], insertionEmptyArray, true));
var insertionSorted9 = insertionSort9.InsertionSort();
console.log("Sorted:   [".concat(insertionSorted9.join(", "), "]"));
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
