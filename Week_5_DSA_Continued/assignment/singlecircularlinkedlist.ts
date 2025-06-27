class singlyCircularLinkedListNode<T> {
    data: T;
    next: singlyCircularLinkedListNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class singlyCircularLinkedList<T> {
    head: singlyCircularLinkedListNode<T> | null;
    
    constructor(value: T) {
        const newNode = new singlyCircularLinkedListNode(value);
        this.head = newNode;
        this.head.next = this.head; // Point to itself to make it circular

    }

    append(value: T): void {
        const newNode = new singlyCircularLinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.head.next = this.head; // Point to itself to make it circular
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next!;
            }
            current.next = newNode;
            newNode.next = this.head; // Point to head to maintain circularity
        }
    }

    prepend(value: T): void {
        const newNode = new singlyCircularLinkedListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.head.next = this.head;
        }else {
            let current = this.head;
            while(current.next !== this.head) {
                current = current.next!;
            }
            let holder = this.head
            newNode.next = holder;
            current.next = newNode;
            this.head = newNode;
        }
    }
}

let newnode = new singlyCircularLinkedList(10);
newnode.append(20);
newnode.append(30);
newnode.prepend(5);
console.log(newnode);