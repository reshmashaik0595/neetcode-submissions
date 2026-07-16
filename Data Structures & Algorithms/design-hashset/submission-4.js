class MyHashSet {
    constructor() {
        this.buckets = new Array(769)
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = []
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let bucketIdx = key % this.buckets.length
        this.buckets[bucketIdx].push(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let bucketIdx = key % this.buckets.length
        this.buckets[bucketIdx] = this.buckets[bucketIdx].filter(ele => ele !== key)
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let bucketIdx = key % this.buckets.length
        for (let i = 0; i < this.buckets[bucketIdx].length; i++) {
            if(this.buckets[bucketIdx][i] == key){
                return true
            }
        }
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
