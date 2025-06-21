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

    constructor(value: any) {
        const newNode = new singlyLinkedListNode(value);
        this.head = newNode;
        this.tail = newNode;
    }

    append(value: any): void {
        const newNode = new singlyLinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    prepend(value: any): void {
        const newNode = new singlyLinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
}