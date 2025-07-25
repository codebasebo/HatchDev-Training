// Pseudocode for Insertion Sort
/*
procedure insertionSort(arr)
    n = length of arr
    for i from 1 to n-1
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key
            arr[j + 1] = arr[j]
            j = j - 1
        arr[j + 1] = key
    return arr
*/

function insertionSort(arr: number[]): number[] {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}
