class stackNode<T> {
    value: T;
    next: stackNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class stackLinkedList<T> {
    private top: stackNode<T> | null = null;
    private bottom: stackNode<T> | null = null;
    private length: number = 0;

    constructor(value: T) {
        this.top = new stackNode(value);
        this.bottom = this.top;
        this.length = 1;
    }
    push(value: T): void {
        const newNode = new stackNode(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            // newNode.next = this.top;
            // this.top = newNode;
            const holdingNode = this.top;
            this.top = newNode;
            this.top.next = holdingNode;
        }
        this.length++;
    }

    peek(): T {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.top!.value;
    }

    pop(): T {
        if(this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        const holdingNode = this.top;
        
        this.top = this.top!.next;
        if(!this.top === null) {
            this.bottom = null;
        }
        
        this.length--;
        return holdingNode!.value;

    }

    isEmpty(): boolean {
        return this.length === 0;
    }

}

let myStack = new stackLinkedList<number>(10);
myStack.push(20);
myStack.push(30);
console.log(myStack.peek()); // 30
console.log(myStack.pop());  // 30
console.log(myStack.peek()); // 20
myStack.push(40);
console.log(myStack);

