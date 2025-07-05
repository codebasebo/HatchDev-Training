class invertBinaryNode{
    value: number;
    left: invertBinaryNode | null;
    right: invertBinaryNode | null;

    constructor(value: number, left: invertBinaryNode | null = null, right: invertBinaryNode | null = null ){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class InvertBinaryTree {
    root: invertBinaryNode | null;

    constructor(root: invertBinaryNode | null = null) {
        this.root = root;
    }

    InvertBinaryTree(root: invertBinaryNode | null): invertBinaryNode | null {
        if (root == null) {
            return root;
        }
        
        // Recursively invert left and right subtrees
        const left = this.InvertBinaryTree(root.left);
        const right = this.InvertBinaryTree(root.right);

        // Swap left and right children
        root.left = right;
        root.right = left;

        return root;
    }
}

// Helper function to print tree structure
function printTree(node: invertBinaryNode | null, prefix: string = "", isLeft: boolean = true): void {
    if (node === null) return;
    
    console.log(prefix + (isLeft ? "├── " : "└── ") + node.value);
    
    if (node.left !== null || node.right !== null) {
        if (node.left !== null) {
            printTree(node.left, prefix + (isLeft ? "│   " : "    "), true);
        }
        if (node.right !== null) {
            printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
        }
    }
}

// Example usage and testing
console.log("=== Invert Binary Tree ===\n");

// Create a binary tree:
//       4
//      / \
//     2   7
//    / \ / \
//   1  3 6  9
const originalRoot = new invertBinaryNode(4);
originalRoot.left = new invertBinaryNode(2);
originalRoot.right = new invertBinaryNode(7);
originalRoot.left.left = new invertBinaryNode(1);
originalRoot.left.right = new invertBinaryNode(3);
originalRoot.right.left = new invertBinaryNode(6);
originalRoot.right.right = new invertBinaryNode(9);

console.log("Original Binary Tree:");
printTree(originalRoot);
console.log();

const invertTree = new InvertBinaryTree(originalRoot);
const invertedRoot = invertTree.InvertBinaryTree(invertTree.root);

console.log("Inverted Binary Tree:");
printTree(invertedRoot);
console.log();

// Test with single node
const singleInvertNode = new invertBinaryNode(42);
const singleInvertTree = new InvertBinaryTree(singleInvertNode);
console.log("Single node tree (before inversion):");
printTree(singleInvertTree.root);
const invertedSingle = singleInvertTree.InvertBinaryTree(singleInvertTree.root);
console.log("Single node tree (after inversion):");
printTree(invertedSingle);

// Test with empty tree
const emptyInvertTree = new InvertBinaryTree(null);
const invertedEmpty = emptyInvertTree.InvertBinaryTree(emptyInvertTree.root);
console.log("Empty tree result:", invertedEmpty);