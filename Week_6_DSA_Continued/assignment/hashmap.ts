class SimpleHashMap<K, V> {
    private buckets: Array<{ key: K; value: V } | null>;
    private capacity: number;
    private size: number;

    constructor(capacity: number = 16) {
        this.capacity = capacity;
        this.buckets = new Array(capacity).fill(null);
        this.size = 0;
    }

    // Simple hash function for strings and numbers
    private hash(key: K): number {
        if (typeof key === 'string') {
            let hash = 0;
            for (let i = 0; i < key.length; i++) {
                hash = (hash + key.charCodeAt(i)) % this.capacity;
            }
            return hash;
        } else if (typeof key === 'number') {
            return key % this.capacity;
        }
        // For other types, convert to string and hash
        return this.hash(String(key) as K);
    }

    // Insert or update a key-value pair
    put(key: K, value: V): void {
        const index = this.hash(key);
        
        // If bucket is empty, insert new entry
        if (this.buckets[index] === null) {
            this.buckets[index] = { key, value };
            this.size++;
        } else {
            // If key already exists, update value
            if (this.buckets[index]!.key === key) {
                this.buckets[index]!.value = value;
            } else {
                // Collision occurred - overwrite existing entry (no collision handling)
                console.log(`Collision detected at index ${index}. Overwriting existing entry.`);
                this.buckets[index] = { key, value };
            }
        }
    }

    // Get value by key
    get(key: K): V | null {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        if (bucket !== null && bucket.key === key) {
            return bucket.value;
        }
        
        return null; // Key not found
    }

    // Remove a key-value pair
    remove(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        if (bucket !== null && bucket.key === key) {
            this.buckets[index] = null;
            this.size--;
            return true;
        }
        
        return false; // Key not found
    }

    // Check if key exists
    has(key: K): boolean {
        return this.get(key) !== null;
    }

    // Get current size
    getSize(): number {
        return this.size;
    }

    // Get all keys
    keys(): K[] {
        const keys: K[] = [];
        for (const bucket of this.buckets) {
            if (bucket !== null) {
                keys.push(bucket.key);
            }
        }
        return keys;
    }

    // Get all values
    values(): V[] {
        const values: V[] = [];
        for (const bucket of this.buckets) {
            if (bucket !== null) {
                values.push(bucket.value);
            }
        }
        return values;
    }

    // Display the hash map
    display(): void {
        console.log("Hash Map Contents:");
        for (let i = 0; i < this.capacity; i++) {
            if (this.buckets[i] !== null) {
                console.log(`Index ${i}: ${this.buckets[i]!.key} => ${this.buckets[i]!.value}`);
            } else {
                console.log(`Index ${i}: empty`);
            }
        }
        console.log(`Size: ${this.size}/${this.capacity}`);
    }
}

// Example usage and testing
const hashMap = new SimpleHashMap<string, number>(8);

console.log("=== Testing Simple Hash Map (No Collision Handling) ===\n");

// Add some key-value pairs
hashMap.put("apple", 10);
hashMap.put("banana", 20);
hashMap.put("cherry", 30);
hashMap.put("date", 40);

console.log("After adding initial values:");
hashMap.display();
console.log();

// Test retrieval
console.log("Getting values:");
console.log(`apple: ${hashMap.get("apple")}`);
console.log(`banana: ${hashMap.get("banana")}`);
console.log(`cherry: ${hashMap.get("cherry")}`);
console.log(`orange: ${hashMap.get("orange")}`); // Not found
console.log();

// Test collision (depending on hash function and capacity)
console.log("Adding more values to potentially cause collisions:");
hashMap.put("elderberry", 50);
hashMap.put("fig", 60);
hashMap.put("grape", 70);
hashMap.put("honeydew", 80);
hashMap.put("kiwi", 90); // This might cause collision

console.log("\nAfter adding more values:");
hashMap.display();
console.log();

// Test update
console.log("Updating apple value from 10 to 100:");
hashMap.put("apple", 100);
console.log(`apple: ${hashMap.get("apple")}`);
console.log();

// Test removal
console.log("Removing banana:");
console.log(`Removed: ${hashMap.remove("banana")}`);
console.log(`banana after removal: ${hashMap.get("banana")}`);
console.log();

// Test has method
console.log("Checking if keys exist:");
console.log(`Has apple: ${hashMap.has("apple")}`);
console.log(`Has banana: ${hashMap.has("banana")}`);
console.log();

// Show all keys and values
console.log("All keys:", hashMap.keys());
console.log("All values:", hashMap.values());
console.log();

console.log("Final state:");
hashMap.display();