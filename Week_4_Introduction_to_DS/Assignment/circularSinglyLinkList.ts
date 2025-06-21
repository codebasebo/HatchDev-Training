class CSNode {
    value: number;
    next: CSNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class CircularSinglyLinkedList {
    head: CSNode | null;

    constructor(initialValue: number) {
        const newNode = new CSNode(initialValue);
        this.head = newNode;
        newNode.next = this.head;
    }

    
    // ...existing code...
    add(value: number): void {
        const newNode = new CSNode(value);
        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        // Find the last node (the one pointing back to head)
        let current = this.head;
        while (current.next !== this.head) {
            current = current.next!;
        }
        
        // Insert new node at the end
        current.next = newNode;
        newNode.next = this.head;
    }
    



}

const circularSinglyLinkedList = new CircularSinglyLinkedList(10);
console.log(circularSinglyLinkedList);
circularSinglyLinkedList.add(20);
circularSinglyLinkedList.add(30);
circularSinglyLinkedList.add(40);
console.log(circularSinglyLinkedList); // CircularSinglyLinkedList with nodes 10 -> 20 -> 30 -> 40 -> (back to 10)