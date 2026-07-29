class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = this.buildMaxHeap(stones)
        while (maxHeap.length > 1) {
            let m1 = this.maxExtract(maxHeap)
            let m2 = this.maxExtract(maxHeap)
            if (m1 == m2) continue
            let val = Math.abs(m1 - m2)
            this.insertInMaxHeap(maxHeap, val)
        }
        return maxHeap.length == 0 ? 0 : maxHeap[0]
    }

    buildMaxHeap(heap) {
        let n = heap.length
        let pi = Math.floor(n / 2) - 1
        for (let i = pi; i >= 0; i--) {
            this.heapify(i, heap)
        }
        return heap
    }

    heapify(i, heap) {
        while (((2 * i) + 1) < heap.length) {
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

    maxExtract(heap) {
        if (heap.length === 1) return heap.pop();
        let max = heap[0]
        heap[0] = heap.pop()
        this.heapify(0, heap)
        return max
    }

    insertInMaxHeap(heap, val) {
        heap.push(val)
        let i = heap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (heap[pi] > heap[i]) break
            let tmp = heap[i]
            heap[i] = heap[pi]
            heap[pi] = tmp
            i = pi
        }
    }
}
