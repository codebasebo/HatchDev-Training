class doubleCircularLinkedListQueueNode <T>{
    value: T;
    next: doubleCircularLinkedListQueueNode<T> | null;
    prev: doubleCircularLinkedListQueueNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }


}

class doubleCircularLinkedListQueue <T>{
    head: doubleCircularLinkedListQueueNode<T> | null;
    lenght: number;

    constructor(value: T) {
        const newNode = new doubleCircularLinkedListQueueNode(value);
        this.head= newNode;
        this.head.next = this.head;
        this.head.prev = this.head;
    }

    enqueue(value: T): void {
        let newNode = new doubleCircularLinkedListQueueNode(value);
        let current = this.head;
        if (current) {
            while(current.next !== this.head) {
                current = current.next!;
            }
        }
        if (current) {
            current.next = newNode;
        }
        newNode.prev = current;
        newNode.next = this.head;


    }

    dequeue(): void {
        let current = this.head;
        if (current) {
            while(current.next !== this.head) {
                current = current.next!;
            }

        }
        this.head = this.head?.next || null;
        if (this.head) {
            this.head.prev = current;
        }
        if (current) {
            current.next = this.head;
        }


    }




}

// Test the queue implementation
console.log("=== Double Circular Linked List Queue Test ===");

// Create a new queue with initial value
let myQueue = new doubleCircularLinkedListQueue(10);
console.log("Created queue with initial value 10");

// Enqueue some values
myQueue.enqueue(20);
console.log("Enqueued 20");

myQueue.enqueue(30);
console.log("Enqueued 30");

myQueue.enqueue(40);
console.log("Enqueued 40");

// Test dequeue
console.log("Dequeuing...");
myQueue.dequeue();
console.log("Dequeued first element");

myQueue.dequeue();
console.log("Dequeued second element");

console.log("Queue operations completed!");