class BSTNode {
    val: number;
    left: BSTNode | null;
    right: BSTNode | null;

    constructor(val: number, left: BSTNode | null = null, right: BSTNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right
    }
}

class BST {
    root: BSTNode | null;

    constructor(root: BSTNode | null = null) {
        this.root = root;
    }
    addNode(val: number): void {
        let newNode = new BSTNode(val);
        let head = this.root;
        if (head === null) {
            this.root = newNode;
            return;
        }
        while (head ) {
            if (val  < head.val) {
                if (head.left === null) {
                    head.left = newNode;
                    return;
                }else {
                    head = head.right;
                    continue;
                }

            }

            else if (val > head.val) {
                if (head.right === null){
                    head.right = newNode;
                    return;
                }else {
                    head = head.left;
                    continue;
                }

            }

            else return;
        }

        // while (head) {
        //     if (val > head.val) {
        //         if (head.right === null) {
        //             head.right = newNode;
        //             return;
        //         } else {
        //             head = head.right;
        //         }
        //     }
        //     else if (val < head.val) {
        //         if (head.left === null) {
        //             head.left = newNode;
        //             return;
        //         } else {
        //             head = head.left;
        //         }
        //     }
        //     else {
        //         return;
        //     }

    }
    searchNode(val: number): BSTNode | null) {
        let currentNode = this.root;
        if (currentNode == null) return null;

        while (currentNode) {
            if (val < currentNode.val) {
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                currentNode = currentNode.right;
            } else {
                return currentNode; // Node found
            }
        }
        return null; // Node not found      

    }

}