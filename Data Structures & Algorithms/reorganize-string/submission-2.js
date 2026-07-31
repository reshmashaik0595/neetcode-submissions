class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        let freqMap = new Map()
        for (let i = 0; i < s.length; i++) {
            freqMap.set(s[i], 1 + (freqMap.get(s[i]) || 0))
        }
        let maxHeap = [...freqMap]
        this.buildMaxHeap(maxHeap)
        let str = ''
        while (maxHeap.length > 0) {
            let max = this.extractMax(maxHeap)
            let ch = max[0]
            let freq = max[1]
            if (str.length > 0 && str[str.length - 1] == ch) {
                if (maxHeap.length === 0) {
                    return ''
                }
                let max_2 = this.extractMax(maxHeap)
                let ch_2 = max_2[0]
                let freq_2 = max_2[1] - 1
                str = str + ch_2
                if (freq_2 > 0) this.insertInMaxHeap(maxHeap, [ch_2, freq_2])
                if (freq > 0) this.insertInMaxHeap(maxHeap, [ch, freq])
            } else {
                str = str + ch
                freq = freq - 1
                if (freq > 0) this.insertInMaxHeap(maxHeap, [ch, freq])
            }
        }
        return str
    }

    buildMaxHeap(heap) {
        let n = heap.length
        let lastNonLeafNode = Math.floor(n / 2) - 1
        for (let i = lastNonLeafNode; i >= 0; i--) {
            this.heapifyDown(heap, i)
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

    extractMax(heap) {
        if (heap.length == 1) return heap.pop()
        let max = heap[0]
        heap[0] = heap.pop()
        this.heapifyDown(heap, 0)
        return max
    }

    insertInMaxHeap(heap, data) { // heapifyUp
        heap.push(data)
        let i = heap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (heap[pi][1] >= heap[i][1]) break
            let tmp = heap[pi]
            heap[pi] = heap[i]
            heap[i] = tmp
            i = pi
        }
    }
}
