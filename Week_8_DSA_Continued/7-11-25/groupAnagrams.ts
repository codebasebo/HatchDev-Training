function groupAnagrams(strs: string[]): string[][] {
    // const anagramMap = new Map<string, string[]>();

    // for (const str of strs) {
    //     const sorted = str.split("").sort().join("");
    //     if (!anagramMap.has(sorted)) {
    //         anagramMap.set(sorted, []);
    //     }
    //     anagramMap.get(sorted)!.push(str);
    // }

    // return Array.from(anagramMap.values());

    const anagramMap: { [key: string]: string[] } = {};
    for (const str of strs) {
        const sorted = str.split("").sort().join("");
        if (!anagramMap[sorted]) {
            anagramMap[sorted] = [];
        }
        anagramMap[sorted].push(str);
    }
    return Object.values(anagramMap);
};

// Test cases for Group Anagrams
console.log("=== Group Anagrams (LeetCode 49) ===\n");

// Test case 1: Basic example
const test1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("Test 1 - Basic Example:");
console.log("Input:", test1);
console.log("Output:", groupAnagrams(test1));
console.log();

// Test case 2: Single character strings
const test2 = ["a"];
console.log("Test 2 - Single Character:");
console.log("Input:", test2);
console.log("Output:", groupAnagrams(test2));
console.log();

// Test case 3: Empty string
const test3 = [""];
console.log("Test 3 - Empty String:");
console.log("Input:", test3);
console.log("Output:", groupAnagrams(test3));
console.log();

// Test case 4: All same characters
const test4 = ["abc", "bca", "cab", "xyz"];
console.log("Test 4 - Mixed Anagrams:");
console.log("Input:", test4);
console.log("Output:", groupAnagrams(test4));
console.log();

// Test case 5: No anagrams
const test5 = ["abc", "def", "ghi"];
console.log("Test 5 - No Anagrams:");
console.log("Input:", test5);
console.log("Output:", groupAnagrams(test5));
console.log();

// Test case 6: Complex example
const test6 = ["listen", "silent", "hello", "world", "stressed", "desserts"];
console.log("Test 6 - Complex Example:");
console.log("Input:", test6);
console.log("Output:", groupAnagrams(test6));
console.log();

// Test case 7: Case sensitivity (if needed)
const test7 = ["Listen", "Silent", "listen", "silent"];
console.log("Test 7 - Case Sensitivity:");
console.log("Input:", test7);
console.log("Output:", groupAnagrams(test7));
console.log();

console.log("=== Algorithm Analysis ===");
console.log("Time Complexity: O(n * k * log(k))");
console.log("  - n: number of strings");
console.log("  - k: maximum length of a string");
console.log("  - log(k): for sorting each string");
console.log("Space Complexity: O(n * k) for storing the grouped anagrams");
console.log("Method: Sort each string to create a key, group strings with same key");
console.log();

console.log("=== How it works ===");
console.log("1. For each string, sort its characters to create a key");
console.log("2. Use this key to group anagrams together");
console.log("3. 'eat' -> 'aet', 'tea' -> 'aet', 'ate' -> 'aet' (same group)");
console.log("4. Return all groups as a 2D array");