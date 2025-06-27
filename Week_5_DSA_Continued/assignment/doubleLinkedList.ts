class doubleLinkedListNode {
    value: number;
    next: doubleLinkedListNode | null;
    prev: doubleLinkedListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    head: doubleLinkedListNode | null;
    tail: doubleLinkedListNode | null;
    length: number;

    constructor(value: number) {
        const newNode = new doubleLinkedListNode(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    append(value: number): void {
        const newNode = new doubleLinkedListNode(value);
        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value: number): void {
        const newNode = new doubleLinkedListNode(value);
        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    reverse(): void {
        let currentNode = this.head;
        let temp: doubleLinkedListNode | null = null;
        this.tail = currentNode; // Set tail to the current head

        while (currentNode !== null) {
            // Swap next and prev pointers
            temp = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = temp;

            // Move to the next node in the original order
            currentNode = currentNode.prev; // Now points to the next node in the original list
        }

        // Set head to the last processed node
        if (temp !== null) {
            this.head = temp.prev; // temp is now at the last node processed
        }
        
    }
}

//     }

const myList = new DoubleLinkedList(10);
myList.append(20);
//myList.append(30);
console.log(myList);