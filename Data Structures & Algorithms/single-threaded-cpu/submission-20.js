class Solution {
    /**
     * @param {number[][]} tasks
     * @return {number[]}
     */
    getOrder(tasks) {
        let arr = []
        for (let i = 0; i < tasks.length; i++) {
            arr.push([tasks[i][0], tasks[i][1], i])
        }
        arr = arr.sort((a, b) => a[0] - b[0])
        let ans = []
        let idx = 0
        let curr_proc_time = 0
        let minHeap = []
        while (idx < arr.length) {
            if (minHeap.length === 0 && curr_proc_time <= arr[idx][0]) {
                curr_proc_time = arr[idx][0]
            }

            while (idx < arr.length && arr[idx][0] <= curr_proc_time) {
                this.insertInMinHeap(minHeap, arr[idx])
                idx++
            }

            let min = this.extractMin(minHeap)
            curr_proc_time = curr_proc_time + min[1]
            ans.push(min[2])
        }

        while (minHeap.length > 0) {
            let min = this.extractMin(minHeap)
            ans.push(min[2])
        }
        return ans
    }

    insertInMinHeap(minHeap, data) {
        minHeap.push(data)
        let i = minHeap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (minHeap[pi][1] < minHeap[i][1] || ((minHeap[pi][1] == minHeap[i][1]) && (minHeap[pi][2] < minHeap[i][2]))) break;
            let tmp = minHeap[pi]
            minHeap[pi] = minHeap[i]
            minHeap[i] = tmp
            i = pi
        }
    }

    extractMin(minHeap) {
        if (minHeap.length == 1) return minHeap.pop()
        let min = minHeap[0]
        minHeap[0] = minHeap.pop()
        this.heapifyDown(minHeap, 0)
        return min
    }

    heapifyDown(minHeap, i) {
        while ((2 * i) + 1 < minHeap.length) {
            let left = 2 * i + 1
            let right = 2 * i + 2
            let min = Math.min(minHeap[i][1], minHeap[left][1])

            if (right < minHeap.length)
                min = Math.min(min, minHeap[right][1])

            if (min === minHeap[i][1]) break;
            if (min === minHeap[left][1]) {
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
}   
