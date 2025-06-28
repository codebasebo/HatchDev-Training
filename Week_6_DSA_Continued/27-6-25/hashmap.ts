class HashMap<K, V> {
    private buckets: Array<Array<[K, V]>>;
    private size: number;
    private capacity: number;

    constructor(initialCapacity: number = 16) {
        this.capacity = initialCapacity;
        this.size = 0;
        this.buckets = new Array(this.capacity);
        for (let i = 0; i < this.capacity; i++) {
            this.buckets[i] = [];
        }
    }

    private hash(key: K): number {
        const keyString = String(key);
        let hash = 0;
        for (let i = 0; i < keyString.length; i++) {
            hash = (hash * 31 + keyString.charCodeAt(i)) % this.capacity;
        }
        return Math.abs(hash);
    }

    set(key: K, value: V): void {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        
        bucket.push([key, value]);
        this.size++;
    }

    get(key: K): V | undefined {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        for (const [k, v] of bucket) {
            if (k === key) {
                return v;
            }
        }
        
        return undefined;
    }

    has(key: K): boolean {
        return this.get(key) !== undefined;
    }

    delete(key: K): boolean {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.size--;
                return true;
            }
        }
        
        return false;
    }

    getSize(): number {
        return this.size;
    }

    keys(): K[] {
        const keys: K[] = [];
        for (const bucket of this.buckets) {
            for (const [key] of bucket) {
                keys.push(key);
            }
        }
        return keys;
    }

    values(): V[] {
        const values: V[] = [];
        for (const bucket of this.buckets) {
            for (const [, value] of bucket) {
                values.push(value);
            }
        }
        return values;
    }
}

export default HashMap;