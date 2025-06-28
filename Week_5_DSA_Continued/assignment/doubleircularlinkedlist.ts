class doubleCircularLinkedListNode {
    value: any;
    next: doubleCircularLinkedListNode | null;
    prev: doubleCircularLinkedListNode | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
        this.prev = null;
    } 
}

class DoublyCircularLinkedList {
    head: doubleCircularLinkedListNode | null;

    constructor(value: any) {
        const newNode = new doubleCircularLinkedListNode(value);
        this.head = newNode;
        this.head.next = this.head; // Point to itself to make it circular
        this.head.prev = this.head; // Point to itself to make it circular
    }

    append(value: any): void {
        const newNode = new doubleCircularLinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.head.next = this.head; // Point to itself to make it circular
            this.head.prev = this.head; // Point to itself to make it circular
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next!;
            }
            current.next = newNode;
            newNode.prev = current;
            newNode.next = this.head; // Point to head to maintain circularity
            this.head.prev = newNode; // Update head's prev to new node
        }
    }

    prepend(value: any): void {
        const newNode = new doubleCircularLinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.head.next = this.head; // Point to itself to make it circular
            this.head.prev = this.head; // Point to itself to make it circular
        } else {
            let holdingNode = this.head;
            while (holdingNode.prev !== this.head) {
                holdingNode = holdingNode.prev;
            }
            holdingNode.prev = newNode;
            newNode.next = this.head;
            newNode.prev = holdingNode;
            this.head.prev = newNode; // Update head's prev to new node
        }
    }

    // Add methods for inserting, deleting, and displaying nodes
}

const circularList = new DoublyCircularLinkedList(1);
circularList.append(2);
circularList.append(3);
circularList.prepend(0);
console.log(circularList);
