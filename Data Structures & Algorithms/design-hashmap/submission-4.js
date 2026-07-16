class MyHashMap {
    constructor() {
        this.buckets = new Array(769)
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = []
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let bucketIdx = key % this.buckets.length
        if (this.get(key) == -1) {
            this.buckets[bucketIdx].push([key, value])
        } else {
            for (let i = 0; i < this.buckets[bucketIdx].length; i++) {
                if (this.buckets[bucketIdx][i][0] == key) {
                    this.buckets[bucketIdx][i][1] = value
                }
            }
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let bucketIdx = key % this.buckets.length
        for (let i = 0; i < this.buckets[bucketIdx].length; i++) {
            if (this.buckets[bucketIdx][i][0] == key) {
                return this.buckets[bucketIdx][i][1]
            }
        }
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let bucketIdx = key % this.buckets.length
        this.buckets[bucketIdx] = this.buckets[bucketIdx].filter(ele => ele[0] !== key)
    }
}
/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
