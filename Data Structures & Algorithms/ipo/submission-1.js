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
        arr.sort((a, b) => a[0] - b[0])
        let maxHeap = []
        let ans = w
        let idx = 0
        while (k > 0) {
            while (idx < arr.length && ans >= arr[idx][0]) {
                this.insertInMaxHeap(maxHeap, arr[idx][1])
                idx++
            }
            if (maxHeap.length == 0) break;
            let max = this.extractMax(maxHeap)
            ans = ans + max
            k--
        }
        return ans
    }

    extractMax(maxHeap) {
        if (maxHeap.length == 1) return maxHeap.pop()
        let max = maxHeap[0]
        maxHeap[0] = maxHeap.pop()
        this.heapifyDown(maxHeap, 0)
        return max
    }

    heapifyDown(maxHeap, i) {
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
            }
            else {
                let tmp = maxHeap[right]
                maxHeap[right] = maxHeap[i]
                maxHeap[i] = tmp
                i = right
            }
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
}
