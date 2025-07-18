class HashNode<K, V> {
    key: K;
    value: V;
    next: HashNode<K, V> | null = null;

    constructor(key: K, value: V, next: HashNode<K, V> | null = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashMap<K, V> {
    private buckets: Array<HashNode<K, V> | null>;
    private size: number;

    constructor(size: number = 20) {
        this.size = size;
        this.buckets = new Array(size).fill(null);
    }

    private hash(key: K): number {
        const strK = String(key);
        let hash = 0;
        for (let i = 0; i < strK.length; i++) {
            hash = (hash + strK.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    set(key: K, value: V): void {
        const index = this.hash(key);
        let head = this.buckets[index];
        let current = head;

        // Check if key already exists and update
        while (current) {
            if (current.key === key) {
                current.value = value;
                return;
            }
            current = current.next;
        }

        // If key doesn't exist, add new node at the beginning
        const newNode = new HashNode(key, value, head);
        this.buckets[index] = newNode;
    }

    get(key: K): V | null {
        const index = this.hash(key);
        let current = this.buckets[index];
        
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }

    remove(key: K): V | null {
        const idx = this.hash(key);
        let current: HashNode<K, V> | null = this.buckets[idx];
        let prev: HashNode<K, V> | null = null;

        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    this.buckets[idx] = current.next;
                }
                return current.value;
            }
            prev = current;
            current = current.next;
        }
        return null;
    }

    has(key: K): boolean {
        return this.get(key) !== null;
    }

    display(): void {
        console.log("HashMap Contents:");
        for (let i = 0; i < this.size; i++) {
            if (this.buckets[i]) {
                let current = this.buckets[i];
                let chain = `Bucket ${i}: `;
                while (current) {
                    chain += `[${current.key}: ${current.value}]`;
                    if (current.next) chain += " -> ";
                    current = current.next;
                }
                console.log(chain);
            }
        }
    }
}

// Example usage and testing
console.log("=== HashMap with Collision Handling (Chaining) ===\\n");

const hashMap = new HashMap<string, number>(5); // Small size to force collisions

console.log("1. Adding key-value pairs:");
hashMap.set("apple", 10);
hashMap.set("banana", 20);
hashMap.set("orange", 30);
hashMap.set("grape", 40);
hashMap.set("kiwi", 50);

hashMap.display();
console.log();

console.log("2. Getting values:");
console.log(`apple: ${hashMap.get("apple")}`);
console.log(`banana: ${hashMap.get("banana")}`);
console.log(`nonexistent: ${hashMap.get("nonexistent")}`);
console.log();

console.log("3. Updating existing key:");
hashMap.set("apple", 100);
console.log(`Updated apple: ${hashMap.get("apple")}`);
console.log();

console.log("4. Adding more items to force collisions:");
hashMap.set("mango", 60);
hashMap.set("peach", 70);
hashMap.display();
console.log();

console.log("5. Checking if keys exist:");
console.log(`Has 'apple': ${hashMap.has("apple")}`);
console.log(`Has 'cherry': ${hashMap.has("cherry")}`);
console.log();

console.log("6. Removing items:");
const removedValue = hashMap.remove("banana");
console.log(`Removed banana, value was: ${removedValue}`);
hashMap.display();
console.log();

console.log("7. Testing with number keys:");
const numHashMap = new HashMap<number, string>(3);
numHashMap.set(1, "one");
numHashMap.set(2, "two");
numHashMap.set(4, "four"); // This might collide with key 1
numHashMap.set(7, "seven"); // This might collide with key 1
numHashMap.display();

console.log();
console.log("=== Algorithm Analysis ===");
console.log("Time Complexity: Average O(1), Worst O(n) for get/set/remove");
console.log("Space Complexity: O(n) where n is number of key-value pairs");
console.log("Collision Resolution: Separate Chaining using Linked Lists");
