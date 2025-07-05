class balanceTreeNode {
    value: number;
    left: balanceTreeNode | null;
    right: balanceTreeNode | null;

    constructor(value: number, left: balanceTreeNode | null = null, right: balanceTreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

}

class BalancedBinaryTree{
    root: balanceTreeNode | null;

    constructor(root: balanceTreeNode | null) {
        this.root = root;
    }

    checkBalanced(): boolean {
        if (this.root === null) return true;
        
        return this.checkBalancedHelper(this.root) !== -1;
    }

    private checkBalancedHelper(node: balanceTreeNode | null): number {
        if (node === null) return 0;

        let leftHeight = this.checkBalancedHelper(node.left);
        if (leftHeight === -1) return -1;
        
        let rightHeight = this.checkBalancedHelper(node.right);
        if (rightHeight === -1) return -1;

        // If the difference is greater than 1, the tree is not balanced
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return Math.max(leftHeight, rightHeight) + 1;
    }


    
}
// QUESITION what is this balance abount how to check?
//same tree 100 leetcode
//Diameter of binary tree 543
// uiny 256 is how many bytes
function isBalanced(root: balanceTreeNode | null): boolean {
    function traverse(node: balanceTreeNode | null): number {
        if (node == null) return 0;

        let left = traverse(node.left);
        if (left == -1) return -1;
        
        let right = traverse(node.right);
        if (right == -1) return -1;

        return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;
    }
    
    return traverse(root) != -1;
}

// Example usage and testing
console.log("=== Balanced Binary Tree Check ===\n");

// Test 1: Balanced tree
//       3
//      / \
//     9   20
//        /  \
//       15   7
const balancedRoot = new balanceTreeNode(3);
balancedRoot.left = new balanceTreeNode(9);
balancedRoot.right = new balanceTreeNode(20);
balancedRoot.right.left = new balanceTreeNode(15);
balancedRoot.right.right = new balanceTreeNode(7);

console.log("Test 1 - Balanced Tree:");
console.log("       3");
console.log("      / \\");
console.log("     9   20");
console.log("        /  \\");
console.log("       15   7");

const balancedTreeInstance = new BalancedBinaryTree(balancedRoot);
console.log(`Is balanced (class method): ${balancedTreeInstance.checkBalanced()}`);
console.log(`Is balanced (standalone function): ${isBalanced(balancedRoot)}`);
console.log();

// Test 2: Unbalanced tree
//       1
//      / \
//     2   2
//    / \
//   3   3
//  / \
// 4   4
const unbalancedRoot = new balanceTreeNode(1);
unbalancedRoot.left = new balanceTreeNode(2);
unbalancedRoot.right = new balanceTreeNode(2);
unbalancedRoot.left.left = new balanceTreeNode(3);
unbalancedRoot.left.right = new balanceTreeNode(3);
unbalancedRoot.left.left.left = new balanceTreeNode(4);
unbalancedRoot.left.left.right = new balanceTreeNode(4);

console.log("Test 2 - Unbalanced Tree:");
console.log("       1");
console.log("      / \\");
console.log("     2   2");
console.log("    / \\");
console.log("   3   3");
console.log("  / \\");
console.log(" 4   4");

const unbalancedTreeInstance = new BalancedBinaryTree(unbalancedRoot);
console.log(`Is balanced (class method): ${unbalancedTreeInstance.checkBalanced()}`);
console.log(`Is balanced (standalone function): ${isBalanced(unbalancedRoot)}`);
console.log();

// Test 3: Empty tree
const emptyBalancedTreeInstance = new BalancedBinaryTree(null);
console.log("Test 3 - Empty Tree:");
console.log(`Is balanced (class method): ${emptyBalancedTreeInstance.checkBalanced()}`);
console.log(`Is balanced (standalone function): ${isBalanced(null)}`);
console.log();

// Test 4: Single node
const singleBalanceNode = new balanceTreeNode(1);
const singleBalancedTreeInstance = new BalancedBinaryTree(singleBalanceNode);
console.log("Test 4 - Single Node:");
console.log(`Is balanced (class method): ${singleBalancedTreeInstance.checkBalanced()}`);
console.log(`Is balanced (standalone function): ${isBalanced(singleBalanceNode)}`);

console.log("\n=== Notes ===");
console.log("A balanced binary tree is one where the heights of the two subtrees");
console.log("of any node differ by at most 1.");
console.log("LeetCode Problem 110: Balanced Binary Tree");
console.log("Diameter of binary tree: LeetCode Problem 543");