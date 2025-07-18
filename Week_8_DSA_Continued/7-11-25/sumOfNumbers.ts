let arr = [1, 2, 3, 4, 5];

for (let i  = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        if (i === j) continue; // Skip if both indices are the same
        console.log(`Pair: (${arr[i]}, ${arr[j]})`);
    }
}

function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for ( let j = i; j < nums.length; j++) {
            if (i === j) continue; // Skip if both indices are the same
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // Return empty array if no pair found
}

function twoSumOptimized(nums: number[], target: number): number[] {
    const mp = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (mp.has(complement)) {
            return [mp.get(complement)!, i];
        }
        mp.set(nums[i], i);
    }
    return [];
}

// Test the twoSum function
console.log("\n=== Testing Two Sum Function ===");

// Test case 1: Basic example
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(`Array: [${nums1.join(", ")}], Target: ${target1}`);
console.log(`Result: [${twoSum(nums1, target1).join(", ")}]`);
console.log(`Values: ${nums1[0]} + ${nums1[1]} = ${nums1[0] + nums1[1]}`);
console.log();

// Test case 2: Target at the end
const nums2 = [3, 2, 4];
const target2 = 6;
console.log(`Array: [${nums2.join(", ")}], Target: ${target2}`);
console.log(`Result: [${twoSum(nums2, target2).join(", ")}]`);
console.log();

// Test case 3: Same number twice
const nums3 = [3, 3];
const target3 = 6;
console.log(`Array: [${nums3.join(", ")}], Target: ${target3}`);
console.log(`Result: [${twoSum(nums3, target3).join(", ")}]`);
console.log();

// Test case 4: No solution
const nums4 = [1, 2, 3];
const target4 = 10;
console.log(`Array: [${nums4.join(", ")}], Target: ${target4}`);
const result4 = twoSum(nums4, target4);
console.log(`Result: [${result4.join(", ")}]`);
console.log(`Found solution: ${result4.length > 0 ? "Yes" : "No"}`);
console.log();

// Test case 5: Negative numbers
const nums5 = [-1, -2, -3, -4, -5];
const target5 = -8;
console.log(`Array: [${nums5.join(", ")}], Target: ${target5}`);
console.log(`Result: [${twoSum(nums5, target5).join(", ")}]`);
console.log();

console.log("=== Algorithm Analysis ===");
console.log("Time Complexity: O(n²) - nested loops");
console.log("Space Complexity: O(1) - only using constant extra space");
console.log("This is the brute force approach for the Two Sum problem (LeetCode 1)");