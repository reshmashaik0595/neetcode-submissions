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
        for (let [key, val] of freqMap) {
            if (minHeap.length < k) {
                this.insert(minHeap, [key, val])
            } else {
                let min = minHeap[0]
                if (min[1] > val) {
                    continue
                } else {
                    minHeap[0] = [key, val]
                    this.heapify(minHeap)
                }
            }
        }

        return minHeap.map(ele => ele[0])
    }

    insert(minHeap, data) {
        minHeap.push(data)
        let i = minHeap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (minHeap[pi][1] < minHeap[i][1]) {
                break
            } else {
                let tmp = minHeap[pi]
                minHeap[pi] = minHeap[i]
                minHeap[i] = tmp
                i = pi
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


            if (min == minHeap[i][1]) break

            if (min == minHeap[l][1]) {
                let tmp = minHeap[i]
                minHeap[i] = minHeap[l]
                minHeap[l] = tmp
                i = l
            } else {
                let tmp = minHeap[i]
                minHeap[i] = minHeap[r]
                minHeap[r] = tmp
                i = r
            }
        }
    }
}
