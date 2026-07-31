class Solution {
    /**
     * @param {number} k
     * @param {number} w
     * @param {number[]} profits
     * @param {number[]} capital
     * @return {number}
     */
    findMaximizedCapital(k, w, profits, capital) {
        let arr = []
        for (let i = 0; i < profits.length; i++) {
            arr.push([capital[i], profits[i]])
        }
        arr = arr.sort((a, b) => a[0] - b[0])
        let idx = 0
        let curr_cap = w
        let maxHeap = []
        while (k > 0) {
            while (idx < arr.length && curr_cap >= arr[idx][0]) {
                this.insertInMaxheap(maxHeap, arr[idx])
                idx++
            }

            if (maxHeap.length == 0) break
            curr_cap = curr_cap + this.extractMax(maxHeap)[1]
            k--
        }
        return curr_cap;
    }

    insertInMaxheap(heap, data) { // heapify-up
        heap.push(data)
        let i = heap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (heap[pi][1] > heap[i][1]) break
            let tmp = heap[pi]
            heap[pi] = heap[i]
            heap[i] = tmp
            i = pi
        }
    }

    extractMax(heap) {  // heapify-down
        let max = heap[0]
        heap[0] = heap.pop()
        this.heapify(heap, 0)
        return max
    }

    heapify(heap, i) {  // heapify-down
        while ((2 * i) + 1 < heap.length) {
            let left = (2 * i) + 1
            let right = (2 * i) + 2
            let max = Math.max(heap[i][1], heap[left][1])
            if (right < heap.length) {
                max = Math.max(max, heap[right][1])
            }

            if (max == heap[i][1]) break
            if (max == heap[left][1]) {
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
