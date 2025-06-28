// Definition for a binary tree node.
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
    }
}
 

function inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }
    // Inorder traversal: Left -> Root -> Right
    const leftTraversal = inorderTraversal(root.left);
    const rightTraversal = inorderTraversal(root.right);
    return [...leftTraversal, root.val, ...rightTraversal];
    
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
function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    
    function traverse(node: TreeNode | null): void {
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
function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    
    function traverse(node: TreeNode | null): void {
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

const root = new TreeNode(1);
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



