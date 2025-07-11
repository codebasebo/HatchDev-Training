
 class DiameterNode {
     val: number
     left: DiameterNode | null
     right: DiameterNode | null
     constructor(val?: number, left?: DiameterNode | null, right?: DiameterNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
     }
 }
 

function diameterOfBinaryTree(root: DiameterNode | null): number {
    let diameter = 0;

    function dfs(node: DiameterNode | null): number {
        if (node === null) return 0;

        const leftDepth = dfs(node.left);
        const rightDepth = dfs(node.right);

        // Update the diameter at this node
        diameter = Math.max(diameter, leftDepth + rightDepth);

        // Return the depth of the tree rooted at this node
        return Math.max(leftDepth, rightDepth) + 1;
    }

    dfs(root);
    return diameter;
};