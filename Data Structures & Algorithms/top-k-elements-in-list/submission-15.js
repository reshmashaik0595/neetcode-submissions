class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map()
        for (let i = 0; i < nums.length; i++) {
            freqMap.set(nums[i], 1 + (freqMap.get(nums[i]) || 0))
        }

        let minHeap = []
        for (let [key, val] of freqMap.entries()) {
            if (minHeap.length < k) {
                this.insertInMinHeap(minHeap, [key, val])
            } else {
                let min = minHeap[0][1]
                if (val < min) {
                    continue
                } else {
                    minHeap[0] = [key, val]
                    this.heapify(minHeap)
                }
            }
        }
        console.log(minHeap)
        return minHeap.map(ele => ele[0])
    }

    insertInMinHeap(minHeap, data) {
        minHeap.push(data)
        let i = minHeap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (minHeap[pi][1] > minHeap[i][1]) {
                let temp = minHeap[pi]
                minHeap[pi] = minHeap[i]
                minHeap[i] = temp
                i = pi
            } else {
                break
            }
        }
    }

    heapify(minHeap, i = 0) {
        while ((2 * i) + 1 < minHeap.length) {
            let l = (2 * i) + 1
            let r = (2 * i) + 2
            let min = Math.min(minHeap[i][1], minHeap[l][1])
            if (r < minHeap.length) {
                min = Math.min(min, minHeap[r][1])
            }

            if (min == minHeap[i][1]) {
                break
            } else if (min == minHeap[l][1]) {
                let temp = minHeap[i]
                minHeap[i] = minHeap[l]
                minHeap[l] = temp
                i = l
            } else {
                let temp = minHeap[i]
                minHeap[i] = minHeap[r]
                minHeap[r] = temp
                i = r
            }
        }
    }
}
