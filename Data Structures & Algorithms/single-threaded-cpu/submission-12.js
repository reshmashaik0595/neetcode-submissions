class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        let list = []
        for (let i = 0; i < tasks.length; i++) {
            list.push([tasks[i][0], tasks[i][1], i])
        }
        list = list.sort((a, b) => a[0] - b[0])
        let minHeap = []
        let curr_time = 0
        let idx = 0
        let ans = []
        while (idx < list.length || minHeap.length > 0) {
            if (minHeap.length === 0 && idx < list.length && curr_time < list[idx][0]) {
                curr_time = list[idx][0]
            }

            while (idx < list.length && curr_time >= list[idx][0]) {
                this.insertInMinHeap(minHeap, [list[idx][1], list[idx][2]])
                idx++
            }

            if (minHeap.length > 0) {
                let min = this.extractMin(minHeap)
                ans.push(min[1])
                curr_time = curr_time + min[0]
            }

        }
        return ans
    }

    insertInMinHeap(heap, data) { // heapify-up
        heap.push(data)
        let i = heap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (heap[pi][0] < heap[i][0] || ((heap[pi][0] === heap[i][0] && heap[pi][1] < heap[i][1])
            )) break
            let tmp = heap[pi]
            heap[pi] = heap[i]
            heap[i] = tmp
            i = pi
        }
    }

    extractMin(heap) {
        let min = heap[0]
        if (heap.length === 1) {
            heap.pop();
            return min;
        }


        heap[0] = heap.pop()
        this.heapifyDown(heap, 0)
        return min
    }

    heapifyDown(heap, idx) {
        while ((2 * idx + 1) < heap.length) {
            let left = 2 * idx + 1
            let right = 2 * idx + 2
            let min = Math.min(heap[idx][0], heap[left][0])
            if (right < heap.length) {
                min = Math.min(min, heap[right][0])
            }
            if (min == heap[idx][0]) break
            if (min == heap[left][0]) {
                let tmp = heap[left]
                heap[left] = heap[idx]
                heap[idx] = tmp
                idx = left
            } else {
                let tmp = heap[right]
                heap[right] = heap[idx]
                heap[idx] = tmp
                idx = right
            }
        }
    }
}
