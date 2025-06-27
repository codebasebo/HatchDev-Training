class singlyLinkedListNode {
    value: any;
    next: singlyLinkedListNode | null;
    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    head: singlyLinkedListNode | null;
    tail: singlyLinkedListNode | null;
    length: number;

    constructor(value: any) {
        const newNode = new singlyLinkedListNode(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
        
    }

    append(value: any): void {
        const newNode = new singlyLinkedListNode(value);
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    prepend(value: any): void {
        const newNode = new singlyLinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    traverseToIndex(index: number): singlyLinkedListNode | null {
        // if (index < 0 || index >= this.length) {
        //     return null; // Index out of bounds
        // }
        // let current: singlyLinkedListNode | null = this.head;
        // for (let i = 0; i < index; i++) {
        //     if (current) {
        //         current = current.next;
        //     }
        // }
        //return current;

        let counter = 0;
        let currentNode = this.head;

        while (counter !== index ) {
            currentNode = currentNode?.next || null;
            counter++;
        }
        return currentNode; // Return the node at the specified index
    }

    insertion(index: number, value: any) {
        // if (index < 0 || index > this.length) {
        //     return; // Index out of bounds
        // }
        // if (index === 0) {
        //     this.prepend(value);
        //     return;
        // }
        // if (index === this.length) {
        //     this.append(value);
        //     return;
        // }
        // const newNode = new singlyLinkedListNode(value);
        // const prevNode = this.traverseToIndex(index - 1);
        // if (prevNode) {
        //     newNode.next = prevNode.next;
        //     prevNode.next = newNode;
        //     this.length++;
        // }

        
    }

    remove(index: number): void {
        // if (index < 0 || index >= this.length) {
        //     return; // Index out of bounds
        // }
        // if (index === 0) {
        //     if (this.head) {
        //         this.head = this.head.next;
        //         this.length--;
        //         if (this.length === 0) {
        //             this.tail = null; // If the list is now empty
        //         }
        //     }
        //     return;
        // }
        // const prevNode = this.traverseToIndex(index - 1);
        // if (prevNode && prevNode.next) {
        //     prevNode.next = prevNode.next.next;
        //     if (prevNode.next === null) {
        //         this.tail = prevNode; // Update tail if we removed the last node
        //     }
        //     this.length--;
        // }
        //Traverse to the node before the one we want to remove
        const preNode = this.traverseToIndex(index - 1);
        // Save the node to be removed
        const nodeToRemove = preNode ? preNode.next : null;
        // create a holder for the next node
        const holdingNode = nodeToRemove ? nodeToRemove.next : null;
        //then we point the prvious node to the next node
        if (preNode) {
            preNode.next = holdingNode;
        }
        //Then we reduce the length of the list
        this.length--;
    }

    reverse(): void {
        if (this.length <= 1) {
            return; // No need to reverse if the list is empty or has one node
        }

        let first = this.head;
        if (!first) return; // Guard against null head
        this.tail = first; // Update tail to the current head
        let second = first.next;
        first.next = null;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head = first;
       
    }

}

// Example usage
const list = new SinglyLinkedList(10);
list.append(20);
list.append(30);
//list.prepend(5);
//list.insertion(2, 15); // Insert 15 at index 2
//list.remove(1); // Remove the node at index 1
list.reverse(); // Reverse the linked list
console.log(list); // Output the list structure