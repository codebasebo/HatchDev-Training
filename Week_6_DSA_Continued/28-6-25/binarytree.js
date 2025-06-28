var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function inorderTraversal(root) {
    if (root === null) {
        return [];
    }
    // Inorder traversal: Left -> Root -> Right
    var leftTraversal = inorderTraversal(root.left);
    var rightTraversal = inorderTraversal(root.right);
    return __spreadArray(__spreadArray(__spreadArray([], leftTraversal, true), [root.val], false), rightTraversal, true);
    // const result: number[] = [];
    // function traverse(node: TreeNode | null): void {
    //     if (node === null) {
    //         return;
    //     }
    //     // First, traverse the left subtree
    //     traverse(node.left);
    //     // Then, visit the current node
    //     result.push(node.val);
    //     // Finally, traverse the right subtree
    //     traverse(node.right);
    // }
    // traverse(root);
    // return result;
}
// Preorder traversal: Root -> Left -> Right
function preorderTraversal(root) {
    var result = [];
    function traverse(node) {
        if (node === null) {
            return;
        }
        // First, visit the current node
        result.push(node.val);
        // Then, traverse the left subtree
        traverse(node.left);
        // Finally, traverse the right subtree
        traverse(node.right);
    }
    traverse(root);
    return result;
}
// Postorder traversal: Left -> Right -> Root
function postorderTraversal(root) {
    var result = [];
    function traverse(node) {
        if (node === null) {
            return;
        }
        // First, traverse the left subtree
        traverse(node.left);
        // Then, traverse the right subtree
        traverse(node.right);
        // Finally, visit the current node
        result.push(node.val);
    }
    traverse(root);
    return result;
}
// Example usage and testing
// Creating a binary tree:
//       1
//      / \
//     2   3
//    / \
//   4   5
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
console.log("Binary Tree Structure:");
console.log("       1");
console.log("      / \\");
console.log("     2   3");
console.log("    / \\");
console.log("   4   5");
console.log();
console.log("Inorder Traversal (Left -> Root -> Right):", inorderTraversal(root));
console.log("Preorder Traversal (Root -> Left -> Right):", preorderTraversal(root));
console.log("Postorder Traversal (Left -> Right -> Root):", postorderTraversal(root));
