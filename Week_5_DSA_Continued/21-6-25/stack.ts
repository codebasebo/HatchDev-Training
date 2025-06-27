class stackArray {
    private items: any[]= [];

    constructor(item: any) {
        this.items.push(item);
    }
    push(item: any): void {
        this.items.push(item);
    }

    pop(): any {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }
    peek(): any {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    size(): number {
        return this.items.length;
    }
}

const stack = new stackArray(1);
stack.push(2);
stack.push("three");

console.log(stack.peek()); // "three"
console.log(stack.pop());  // "three"
console.log(stack.size()); // 2
