class maxDepthTreeNode{
    value: number;
    left: maxDepthTreeNode | null;
    right: maxDepthTreeNode | null;

    constructor(value: number, left: maxDepthTreeNode | null = null, right: maxDepthTreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class maxDepthBinaryTree{
    root: maxDepthTreeNode | null;

    constructor(root: maxDepthTreeNode | null) {
        this.root = root;
    }

    findMaxdepth(node: maxDepthTreeNode | null): number {
        if (node == null) return 0;

        let left = this.findMaxdepth(node.left);
        let right = this.findMaxdepth(node.right);

        return 1 + Math.max(left, right);
        // return 1 + (left > right? left : right);
    }
}

// Example usage and testing
console.log("=== Maximum Depth of Binary Tree ===\n");

// Create a binary tree:
//       3
//      / \
//     9   20
//        /  \
//       15   7
const treeRoot = new maxDepthTreeNode(3);
treeRoot.left = new maxDepthTreeNode(9);
treeRoot.right = new maxDepthTreeNode(20);
treeRoot.right.left = new maxDepthTreeNode(15);
treeRoot.right.right = new maxDepthTreeNode(7);

console.log("Binary Tree Structure:");
console.log("       3");
console.log("      / \\");
console.log("     9   20");
console.log("        /  \\");
console.log("       15   7");
console.log();

const tree = new maxDepthBinaryTree(treeRoot);
const maxDepth = tree.findMaxdepth(tree.root);

console.log(`Maximum depth of the tree: ${maxDepth}`);
console.log();

// Test with a single node tree
const singleNode = new maxDepthTreeNode(1);
const singleTree = new maxDepthBinaryTree(singleNode);
console.log(`Maximum depth of single node tree: ${singleTree.findMaxdepth(singleTree.root)}`);

// Test with empty tree
const emptyTree = new maxDepthBinaryTree(null);
console.log(`Maximum depth of empty tree: ${emptyTree.findMaxdepth(emptyTree.root)}`);

// Test with deeper tree
//       1
//      / \
//     2   3
//    /
//   4
//  /
// 5
const deepRoot = new maxDepthTreeNode(1);
deepRoot.left = new maxDepthTreeNode(2);
deepRoot.right = new maxDepthTreeNode(3);
deepRoot.left.left = new maxDepthTreeNode(4);
deepRoot.left.left.left = new maxDepthTreeNode(5);

const deepTree = new maxDepthBinaryTree(deepRoot);
console.log(`Maximum depth of deep tree: ${deepTree.findMaxdepth(deepTree.root)}`);