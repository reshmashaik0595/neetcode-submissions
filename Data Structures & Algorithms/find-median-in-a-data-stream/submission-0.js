class MedianFinder {
    constructor() {
        this.minHeap = [];
        this.maxHeap = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.maxHeap.length == 0 || this.maxHeap[0] >= num) {
            this.insertInMaxHeap(this.maxHeap, num);
        } else if (this.maxHeap[0] < num) {
            this.insertInMinHeap(this.minHeap, num);
        }

        if (this.maxHeap.length > this.minHeap.length + 1) {
            this.insertInMinHeap(this.minHeap, this.extractMax(this.maxHeap));
        } else if (this.minHeap.length > this.maxHeap.length) {
            this.insertInMaxHeap(this.maxHeap, this.extractMin(this.minHeap));
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.maxHeap.length > this.minHeap.length) {
            return this.maxHeap[0];
        }
        return (this.maxHeap[0] + this.minHeap[0]) / 2;
    }

    insertInMinHeap(heap, val) {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2);
            if (heap[pi] < heap[i]) break
            let tmp = heap[pi]
            heap[pi] = heap[i]
            heap[i] = tmp
            i = pi
        }
    }

    insertInMaxHeap(heap, val) {
        heap.push(val);
        let i = heap.length - 1;
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2);
            if (heap[pi] > heap[i]) break
            let tmp = heap[pi]
            heap[pi] = heap[i]
            heap[i] = tmp
            i = pi
        }
    }

    extractMin(heap) {
        if (heap.length == 1) {
            return heap.pop()
        }

        let min = heap[0]
        heap[0] = heap.pop()
        this.minHeapify(heap, 0)
        return min
    }

    extractMax(heap) {
        if (heap.length == 1) {
            return heap.pop()
        }

        let max = heap[0]
        heap[0] = heap.pop()
        this.maxHeapify(heap, 0)
        return max
    }

    minHeapify(heap, i) {
        while ((2 * i) + 1 < heap.length) {
            let left = 2 * i + 1
            let right = 2 * i + 2
            let min = Math.min(heap[i], heap[left])
            if (right < heap.length) {
                min = Math.min(min, heap[right])
            }

            if (min == heap[i]) break
            if (min == heap[left]) {
                let tmp = heap[left]
                heap[left] = heap[i]
                heap[i] = tmp
                i = left
            } else {
                let tmp = heap[right]
                heap[right] = heap[i]
                heap[i] = tmp
                i = right
            }
        }
    }

    maxHeapify(heap, i) {
        while ((2 * i) + 1 < heap.length) {
            let left = 2 * i + 1
            let right = 2 * i + 2
            let max = Math.max(heap[i], heap[left])
            if (right < heap.length) {
                max = Math.max(max, heap[right])
            }

            if (max == heap[i]) break
            if (max == heap[left]) {
                let tmp = heap[left]
                heap[left] = heap[i]
                heap[i] = tmp
                i = left
            } else {
                let tmp = heap[right]
                heap[right] = heap[i]
                heap[i] = tmp
                i = right
            }
        }
    }
}
