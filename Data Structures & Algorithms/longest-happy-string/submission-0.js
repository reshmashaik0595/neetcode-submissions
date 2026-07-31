class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        let maxHeap = []

        if (a > 0) maxHeap.push(['a', a]);
        if (b > 0) maxHeap.push(['b', b]);
        if (c > 0) maxHeap.push(['c', c]);
        this.buildMapHeap(maxHeap)
        let str = ''
        while (maxHeap.length > 0) {
            let max = this.extractMax(maxHeap)
            let curr_char = max[0]
            if (str.length >= 2 && str[str.length - 1] == curr_char && str[str.length - 2] == curr_char) {
                if (maxHeap.length === 0) {
                    break;
                }
                let max_2 = this.extractMax(maxHeap)

                this.insertInMaxHeap(maxHeap, max)
                let curr_char = max_2[0]
                str = str + curr_char
                let curr_freq_2 = max_2[1] - 1
                if (curr_freq_2 == 0) {
                    continue
                }
                let data = [max_2[0], curr_freq_2]
                this.insertInMaxHeap(maxHeap, data)

            } else {
                str = str + curr_char
                let curr_freq = max[1] - 1
                if (curr_freq == 0) {
                    continue
                }
                let data = [max[0], curr_freq]
                this.insertInMaxHeap(maxHeap, data)
            }

        }
        return str
    }

    buildMapHeap(maxHeap) {
        let n = maxHeap.length
        let lastNonLeafNode = Math.floor(n / 2) - 1
        for (let i = lastNonLeafNode; i >= 0; i--) {
            this.heapifyDown(maxHeap, i)
        }
    }

    heapifyDown(heap, i) {
        while ((2 * i) + 1 < heap.length) {
            let left = (2 * i) + 1
            let right = (2 * i) + 2
            let max = Math.max(heap[i][1], heap[left][1])
            if (right < heap.length) {
                max = Math.max(max, heap[right][1])
            }

            if (heap[i][1] == max) break;
            if (heap[left][1] == max) {
                let tmp = heap[i]
                heap[i] = heap[left]
                heap[left] = tmp
                i = left
            } else {
                let tmp = heap[i]
                heap[i] = heap[right]
                heap[right] = tmp
                i = right
            }
        }
    }

    insertInMaxHeap(heap, data) {
        heap.push(data)
        let i = heap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (heap[pi][1] > heap[i][1]) break;
            let tmp = heap[pi]
            heap[pi] = heap[i]
            heap[i] = tmp
            i = pi
        }
    }

    extractMax(heap) {
        if (heap.length == 1) return heap.pop()
        let max = heap[0]
        heap[0] = heap.pop()
        this.heapifyDown(heap, 0)
        return max
    }
}
