class HashNode<k, v> {
    key: k;
    value: v;
    next: HashNode<k, v> | null = null;

    constructor(key: k, value: v, next: HashNode<k, v> | null = null) {
        if (key === null || value === null) {
            throw new Error("Key and value cannot be null");
        }
        this.key = key;
        this.value = value;
    }
}

class HashMap<k, v> {
    private buckets: Array<HashNode<k, v> | null>;
    private size: number;

    constructor(size: number = 20){
        this.size = size;
        this.buckets = new Array(size).fill(null);
        
    }

    private hash(key: k): number {
        const strK = String(key);
        let hash = 0;
        for (let i = 0; i < strK.length; i++) {
            hash = (hash + stay)
        }

    }

    get(key: k): v | null {
        const index = this.hash(key) % this.size;
        let current = this.buckets[index];
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }

}