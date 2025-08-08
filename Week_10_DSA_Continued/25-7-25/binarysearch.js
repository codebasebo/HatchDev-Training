function binartsearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        //const mid = parseInt((left + right) / 2);
        if (target === arr[mid]) {
            return mid; // Target found
        }
        if (target > arr[mid]) {
            left = mid + 1; // Search in the right half
        }
        else {
            right = mid - 1; // Search in the left half
        }
        return -1; // Target not found
    }
}


// Test the binary search function
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;

console.log("Array:", sortedArray);
console.log("Target:", target);
console.log("Index of target:", binartsearch(sortedArray, target));

// Test with a target not in the array
const notFoundTarget = 6;
console.log("Target not in array:", notFoundTarget);
console.log("Index of target:", binartsearch(sortedArray, notFoundTarget));

// Additional tests
console.log("\n--- Additional Tests ---");
console.log("Search for 1 (first element):", binartsearch(sortedArray, 1));
console.log("Search for 19 (last element):", binartsearch(sortedArray, 19));
console.log("Search for 0 (less than minimum):", binartsearch(sortedArray, 0));
console.log("Search for 20 (greater than maximum):", binartsearch(sortedArray, 20));
