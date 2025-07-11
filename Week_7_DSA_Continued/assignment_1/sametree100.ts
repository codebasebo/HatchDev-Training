class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null ) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    
    if (p === null && q === null) return true; // Both nodes are null, trees are the same
    if (p === null || q === null ) return false; // One node is null, trees are not the same

    return (p.value === q.value) &&
              isSameTree(p.left, q.left) &&
              isSameTree(p.right, q.right);
}   


// ...existing code...

// Example usage and testing
console.log("=== Same Tree (LeetCode 100) ===\n");

// Test case 1: Same trees
//       1
//      / \
//     2   3
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log("Test 1: Same Trees");
console.log("Tree 1:");
console.log("   1");
console.log("  / \\");
console.log(" 2   3");
console.log("Tree 2:");
console.log("   1");
console.log("  / \\");
console.log(" 2   3");
console.log(`Result: ${isSameTree(tree1, tree2)}`);
console.log();

// Test case 2: Different structures
//   1       1
//  /         \
// 2           2
const tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);

const tree4 = new TreeNode(1);
tree4.right = new TreeNode(2);

console.log("Test 2: Different Structures");
console.log("Tree 3:");
console.log(" 1");
console.log("/");
console.log("2");
console.log("Tree 4:");
console.log(" 1");
console.log("  \\");
console.log("   2");
console.log(`Result: ${isSameTree(tree3, tree4)}`);
console.log();

// Test case 3: Different values
//     1       1
//    / \     / \
//   2   1   2   3
const tree5 = new TreeNode(1);
tree5.left = new TreeNode(2);
tree5.right = new TreeNode(1);

const tree6 = new TreeNode(1);
tree6.left = new TreeNode(2);
tree6.right = new TreeNode(3);

console.log("Test 3: Different Values");
console.log("Tree 5:");
console.log("   1");
console.log("  / \\");
console.log(" 2   1");
console.log("Tree 6:");
console.log("   1");
console.log("  / \\");
console.log(" 2   3");
console.log(`Result: ${isSameTree(tree5, tree6)}`);
console.log();

// Test case 4: Empty trees
console.log("Test 4: Empty Trees");
console.log(`Result: ${isSameTree(null, null)}`);
console.log();

// Test case 5: One empty, one not
console.log("Test 5: One Empty, One Not");
console.log(`Result: ${isSameTree(tree1, null)}`);
console.log();

// Test case 6: Single node trees
const singleNode1 = new TreeNode(5);
const singleNode2 = new TreeNode(5);
console.log("Test 6: Single Node Trees (Same)");
console.log(`Result: ${isSameTree(singleNode1, singleNode2)}`);
console.log();

const singleNode3 = new TreeNode(5);
const singleNode4 = new TreeNode(7);
console.log("Test 7: Single Node Trees (Different)");
console.log(`Result: ${isSameTree(singleNode3, singleNode4)}`);