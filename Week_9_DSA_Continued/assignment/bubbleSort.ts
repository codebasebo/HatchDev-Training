// Pseudocode for Bubble Sort
/*
procedure bubbleSort(arr)
    n = length of arr
    for i from 0 to n-1
        for j from 0 to n-i-2
            if arr[j] > arr[j + 1]
                swap arr[j] and arr[j + 1]
    return arr
*/

function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
