class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.size = 0
        this.minHeap = []
        this.stream = nums
        for (let i = 0; i < this.stream.length; i++) {
            if (this.minHeap.length < k) { // Free space available
                this.insertInMinHeap(this.stream[i])
            } else { // Start heapification
                if (this.stream[i] > this.minHeap[0]) {
                    this.minHeap[0] = this.stream[i]
                    this.heapify()
                }
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.minHeap.length < this.k) { // Free space available
            this.insertInMinHeap(val)
        }
        else if (val > this.minHeap[0]) {
            this.minHeap[0] = val
            this.heapify()
        }
        return this.minHeap[0]
    }

    insertInMinHeap(val) {
        this.minHeap.push(val)
        let i = this.minHeap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (this.minHeap[i] >= this.minHeap[pi]) {
                break
            } else {
                let temp = this.minHeap[i]
                this.minHeap[i] = this.minHeap[pi]
                this.minHeap[pi] = temp
                i = pi
            }
        }
    }

    heapify(i = 0) {
        while (((2 * i) + 1) < this.minHeap.length) {
            let left = (2 * i) + 1
            let right = (2 * i) + 2
            let min = Math.min(this.minHeap[left], this.minHeap[i])
            if (right < this.minHeap.length) {
                min = Math.min(this.minHeap[right], min)
            }
            if (this.minHeap[i] == min) {
                break
            }

            if (this.minHeap[left] == min) {
                let temp = this.minHeap[left]
                this.minHeap[left] = this.minHeap[i]
                this.minHeap[i] = temp
                i = left
            } else {
                let temp = this.minHeap[right]
                this.minHeap[right] = this.minHeap[i]
                this.minHeap[i] = temp
                i = right
            }
        }
    }
}
