class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minHeap = []
        for (let i = 0; i < nums.length; i++) {
            if (minHeap.length < k) {
                this.insertInMinHeap(minHeap, nums[i])
            } else {
                if (nums[i] <= minHeap[0]) continue
                minHeap[0] = nums[i]
                this.heapifyMin(minHeap, 0)
            }
        }
        return minHeap[0]
    }

    insertInMinHeap(minHeap, val) {
        minHeap.push(val)
        let i = minHeap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (minHeap[pi] < minHeap[i]) break;
            let temp = minHeap[i]
            minHeap[i] = minHeap[pi]
            minHeap[pi] = temp
            i = pi
        }
    }

    heapifyMin(minHeap, i) {
        while ((2 * i) + 1 < minHeap.length) {
            let left = (2 * i) + 1
            let right = (2 * i) + 2
            let min = Math.min(minHeap[i], minHeap[left])
            if (right < minHeap.length) {
                min = Math.min(min, minHeap[right])
            }

            if (minHeap[i] == min) break;
            if (min == minHeap[left]) {
                let temp = minHeap[i]
                minHeap[i] = minHeap[left]
                minHeap[left] = temp
                i = left
            } else {
                let temp = minHeap[i]
                minHeap[i] = minHeap[right]
                minHeap[right] = temp
                i = right
            }
        }
    }
}
