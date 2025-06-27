class queueNode<T> {
    value: T;
    next: queueNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class queueLinkedList<T> {
    private first: queueNode<T> | null = null;
    private last: queueNode<T> | null = null;
    private length: number = 0;

    constructor(value: T) {
        this.first = new queueNode(value);
        this.last = this.first;
        this.length = 1;
    }

    enqueue(value: T): void {
        const newNode = new queueNode(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }else {
            if (this.last) {
                this.last.next = newNode;
                this.last = this.last.next;
            } else {
                // This case should not happen in a well-formed queue
                this.first = newNode;       
                this.last = newNode; 
            }

        }
        this.length++;
    }

    dequeue(): T {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        const holdingNode = this.first!;
        this.first = this.first!.next;
        if (this.first === null) {
            this.last = null;
        }
        this.length--;
        return holdingNode.value;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }


}

const queue = new queueLinkedList<number>(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log(queue.dequeue()); 
console.log(queue);
queue.enqueue(4);
console.log(queue);