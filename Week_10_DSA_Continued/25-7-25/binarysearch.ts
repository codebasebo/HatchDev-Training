function binartsearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        //const mid = parseInt((left + right) / 2);

        if (target === arr[mid]) {
            return mid; // Target found
        } else if (target > arr[mid]) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}