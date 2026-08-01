class MedianFinder {
    constructor() {
        this.minHeap = []
        this.maxHeap = []
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.maxHeap.length == 0 || this.maxHeap[0] > num) this.insertInMaxHeap(this.maxHeap, num)
        else this.insertInMinHeap(this.minHeap, num)

        let maxLength = this.maxHeap.length
        let minLength = this.minHeap.length
        if (minLength > maxLength) {
            this.insertInMaxHeap(this.maxHeap, this.extractMin(this.minHeap))
        } else if ((maxLength - minLength) > 1) {
            this.insertInMinHeap(this.minHeap, this.extractMax(this.maxHeap))
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        let maxLength = this.maxHeap.length
        let minLength = this.minHeap.length
        if (maxLength > minLength) return this.maxHeap[0]
        return (this.maxHeap[0] + this.minHeap[0]) / 2
    }

    insertInMinHeap(minHeap, data) {
        minHeap.push(data)
        let i = minHeap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (minHeap[pi] < minHeap[i]) break;
            let tmp = minHeap[pi]
            minHeap[pi] = minHeap[i]
            minHeap[i] = tmp
            i = pi
        }
    }

    insertInMaxHeap(maxHeap, data) {
        maxHeap.push(data)
        let i = maxHeap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (maxHeap[pi] > maxHeap[i]) break;
            let tmp = maxHeap[pi]
            maxHeap[pi] = maxHeap[i]
            maxHeap[i] = tmp
            i = pi
        }
    }

    extractMin(minHeap) {
        if (minHeap.length == 1) return minHeap.pop()
        let min = minHeap[0]
        minHeap[0] = minHeap.pop()
        this.minHeapifyDown(minHeap, 0)
        return min
    }

    extractMax(maxHeap) {
        if (maxHeap.length == 1) return maxHeap.pop()
        let max = maxHeap[0]
        maxHeap[0] = maxHeap.pop()
        this.maxHeapifyDown(maxHeap, 0)
        return max
    }

    minHeapifyDown(minHeap, i) {
        while ((2 * i) + 1 < minHeap.length) {
            let left = (2 * i) + 1
            let right = (2 * i) + 2
            let min = Math.min(minHeap[i], minHeap[left])
            if (right < minHeap.length) min = Math.min(min, minHeap[right])
            if (min == minHeap[i]) break;
            if (min == minHeap[left]) {
                let tmp = minHeap[left]
                minHeap[left] = minHeap[i]
                minHeap[i] = tmp
                i = left
            } else {
                let tmp = minHeap[right]
                minHeap[right] = minHeap[i]
                minHeap[i] = tmp
                i = right
            }
        }
    }

    maxHeapifyDown(maxHeap, i) {
        while ((2 * i) + 1 < maxHeap.length) {
            let left = (2 * i) + 1
            let right = (2 * i) + 2
            let max = Math.max(maxHeap[i], maxHeap[left])
            if (right < maxHeap.length) max = Math.max(max, maxHeap[right])
            if (max == maxHeap[i]) break;
            if (max == maxHeap[left]) {
                let tmp = maxHeap[left]
                maxHeap[left] = maxHeap[i]
                maxHeap[i] = tmp
                i = left
            } else {
                let tmp = maxHeap[right]
                maxHeap[right] = maxHeap[i]
                maxHeap[i] = tmp
                i = right
            }
        }
    }
}
