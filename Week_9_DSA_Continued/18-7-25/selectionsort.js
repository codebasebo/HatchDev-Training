var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var selectionSort = /** @class */ (function () {
    function selectionSort(arr) {
        this.arr = arr;
    }
    selectionSort.prototype.selectionSort = function () {
        var _a;
        var n = this.arr.length;
        for (var i = 0; i < n - 1; i++) {
            var minIndex = i;
            for (var j = i + 1; j < n; j++) {
                if (this.arr[j] < this.arr[minIndex]) {
                    minIndex = j;
                }
            }
            // Swap the found minimum element with the first element
            _a = [this.arr[minIndex], this.arr[i]], this.arr[i] = _a[0], this.arr[minIndex] = _a[1];
        }
        return this.arr;
    };
    selectionSort.prototype.getArray = function () {
        return __spreadArray([], this.arr, true); // Return a copy to avoid external modification
    };
    selectionSort.prototype.display = function () {
        console.log("Array: [".concat(this.arr.join(", "), "]"));
    };
    return selectionSort;
}());
// Test cases for Selection Sort
console.log("=== Selection Sort Algorithm ===\n");
// Test case 1: Unsorted array
console.log("Test 1 - Unsorted Array:");
var selectionUnsortedArray = [64, 25, 12, 22, 11];
console.log("Original: [".concat(selectionUnsortedArray.join(", "), "]"));
var selectionSort1 = new selectionSort(__spreadArray([], selectionUnsortedArray, true));
var selectionSorted1 = selectionSort1.selectionSort();
console.log("Sorted:   [".concat(selectionSorted1.join(", "), "]"));
console.log();
// Test case 2: Already sorted array
console.log("Test 2 - Already Sorted Array:");
var selectionSortedArray = [1, 2, 3, 4, 5];
console.log("Original: [".concat(selectionSortedArray.join(", "), "]"));
var selectionSort2 = new selectionSort(__spreadArray([], selectionSortedArray, true));
var selectionSorted2 = selectionSort2.selectionSort();
console.log("Sorted:   [".concat(selectionSorted2.join(", "), "]"));
console.log();
// Test case 3: Reverse sorted array (worst case)
console.log("Test 3 - Reverse Sorted Array:");
var selectionReverseArray = [5, 4, 3, 2, 1];
console.log("Original: [".concat(selectionReverseArray.join(", "), "]"));
var selectionSort3 = new selectionSort(__spreadArray([], selectionReverseArray, true));
var selectionSorted3 = selectionSort3.selectionSort();
console.log("Sorted:   [".concat(selectionSorted3.join(", "), "]"));
console.log();
// Test case 4: Array with duplicates
console.log("Test 4 - Array with Duplicates:");
var selectionDuplicateArray = [3, 7, 3, 1, 7, 1, 5];
console.log("Original: [".concat(selectionDuplicateArray.join(", "), "]"));
var selectionSort4 = new selectionSort(__spreadArray([], selectionDuplicateArray, true));
var selectionSorted4 = selectionSort4.selectionSort();
console.log("Sorted:   [".concat(selectionSorted4.join(", "), "]"));
console.log();
// Test case 5: Single element array
console.log("Test 5 - Single Element:");
var selectionSingleArray = [42];
console.log("Original: [".concat(selectionSingleArray.join(", "), "]"));
var selectionSort5 = new selectionSort(__spreadArray([], selectionSingleArray, true));
var selectionSorted5 = selectionSort5.selectionSort();
console.log("Sorted:   [".concat(selectionSorted5.join(", "), "]"));
console.log();
// Test case 6: Two elements
console.log("Test 6 - Two Elements:");
var selectionTwoArray = [3, 1];
console.log("Original: [".concat(selectionTwoArray.join(", "), "]"));
var selectionSort6 = new selectionSort(__spreadArray([], selectionTwoArray, true));
var selectionSorted6 = selectionSort6.selectionSort();
console.log("Sorted:   [".concat(selectionSorted6.join(", "), "]"));
console.log();
// Test case 7: Negative numbers
console.log("Test 7 - Negative Numbers:");
var selectionNegativeArray = [-5, -2, -8, -1, -9];
console.log("Original: [".concat(selectionNegativeArray.join(", "), "]"));
var selectionSort7 = new selectionSort(__spreadArray([], selectionNegativeArray, true));
var selectionSorted7 = selectionSort7.selectionSort();
console.log("Sorted:   [".concat(selectionSorted7.join(", "), "]"));
console.log();
// Test case 8: Mixed positive and negative
console.log("Test 8 - Mixed Numbers:");
var selectionMixedArray = [-3, 5, -1, 8, 0, -7, 2];
console.log("Original: [".concat(selectionMixedArray.join(", "), "]"));
var selectionSort8 = new selectionSort(__spreadArray([], selectionMixedArray, true));
var selectionSorted8 = selectionSort8.selectionSort();
console.log("Sorted:   [".concat(selectionSorted8.join(", "), "]"));
console.log();
// Test case 9: Large array
console.log("Test 9 - Large Array:");
var selectionLargeArray = [89, 45, 68, 90, 29, 34, 17, 78, 23, 56];
console.log("Original: [".concat(selectionLargeArray.join(", "), "]"));
var selectionSort9 = new selectionSort(__spreadArray([], selectionLargeArray, true));
var selectionSorted9 = selectionSort9.selectionSort();
console.log("Sorted:   [".concat(selectionSorted9.join(", "), "]"));
console.log();
// Test case 10: Empty array
console.log("Test 10 - Empty Array:");
var selectionEmptyArray = [];
console.log("Original: [".concat(selectionEmptyArray.join(", "), "]"));
var selectionSort10 = new selectionSort(__spreadArray([], selectionEmptyArray, true));
var selectionSorted10 = selectionSort10.selectionSort();
console.log("Sorted:   [".concat(selectionSorted10.join(", "), "]"));
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
