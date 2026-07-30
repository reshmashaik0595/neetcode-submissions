class Solution {
    /**
     * @param {nu hghjjhhbjvgjljmnbbmmmbmnmnbnmbmmber[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minHeap = []
        for (let i = 0; i < nums.length; i++) {
            if (minHeap.length < k) {
                this.insertInMinHeap(minHeap, nums[i])
            } else {
                if (nums[i] < minHeap[0]) {
                    continue
                } else {
                    minHeap[0] = nums[i]
                    this.heapify(minHeap, 0)
                }
            }
        }
        return minHeap[0]
    }

    insertInMinHeap(minHeap, val) {
        minHeap.push(val)
        let i = minHeap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (minHeap[pi] < minHeap[i]) {
                break
            } else {
                let tmp = minHeap[pi]
                minHeap[pi] = minHeap[i]
                minHeap[i] = tmp
                i = pi
            }
        }
    }

    heapify(minHeap, i) {
        while ((2 * i) + 1 < minHeap.length) {
            let left = (2 * i) + 1
            let right = (2 * i) + 2
            let min = Math.min(minHeap[i], minHeap[left])
            if (right < minHeap.length) {
                min = Math.min(min, minHeap[right])
            }

            if (minHeap[i] == min) break

            if (minHeap[left] == min) {
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
