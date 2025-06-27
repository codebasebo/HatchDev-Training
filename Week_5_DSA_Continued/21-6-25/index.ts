class DoubleLinkedListNode {
    value: any;
    next: DoubleLinkedListNode | null = null;
    prev: DoubleLinkedListNode | null = null;
    
    constructor(value: any) {
        this.value = value;
    }
}

class DoubleLinkedList {
    head: DoubleLinkedListNode;
    tail: DoubleLinkedListNode;
    length: number;

    constructor(value: any) {
        this.head = new DoubleLinkedListNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value: any) {
        const newNode = new DoubleLinkedListNode(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    prepend(value: any) {
        const newNode = new DoubleLinkedListNode(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    traverseToIndex(index: number) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next!;
            counter++;
        }
        return current;
    }

    remove(index: number) {
        const prevNode = this.traverseToIndex(index - 1);
        const NodeToRemove = prevNode.next;
        const holdingNode  = NodeToRemove!.next;
        prevNode.next = holdingNode;
        if (holdingNode) {
            holdingNode.prev = prevNode;               
        }
        if (NodeToRemove === this.tail) {
            this.tail = prevNode;
        }
        this.length--;
        return NodeToRemove!.value;     
    }

    insert(index: number, value: any) {
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds");
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.length) {
            this.append(value);
            return;
        }
        // const prevNode = this.traverseToIndex(index - 1);
        // const newNode = new DoubleLinkedListNode(value);
        // const nextNode = prevNode.next;
        // prevNode.next = newNode;
        // newNode.prev = prevNode;
        // newNode.next = nextNode;
        // if (nextNode) {
        //     nextNode.prev = newNode;
        // }
        // this.length++;

        const newNode = new DoubleLinkedListNode(value);
        const prevNode = this.traverseToIndex(index - 1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        if (nextNode) {
            nextNode.prev = newNode;
        }
        this.length++;
    }
}

const doubleList = new DoubleLinkedList(10);
doubleList.append(20);
doubleList.append(30);
doubleList.prepend(5);
doubleList.insert(2, 15);
console.log(doubleList);
console.log(doubleList.remove(2)); // Should remove 15
console.log(doubleList);
console.log(doubleList.traverseToIndex(0).value); // Should print 5
console.log(doubleList.traverseToIndex(1).value); // Should print 10
console.log(doubleList.traverseToIndex(2).value); // Should print 20
console.log(doubleList.traverseToIndex(3).value); // Should print 30
console.log(doubleList.length); // Should print 4