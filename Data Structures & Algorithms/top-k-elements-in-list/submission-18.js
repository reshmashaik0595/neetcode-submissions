class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let minHeap = []
        let freqMap = new Map()
        for (let i = 0; i < nums.length; i++) {
            let currFreq = 1 + (freqMap.get(nums[i]) | 0)
            let currEle = nums[i]
            freqMap.set(currEle, currFreq)
        }
        for (let [currEle, currFreq] of freqMap.entries()) {
            let data = [currEle, currFreq]
            if (minHeap.length < k) {
                this.insertInMinHeap(minHeap, data)
            } else {
                let minSoFar = minHeap[0]
                if (minSoFar[1] > currFreq) {
                    continue
                }
                else {
                    minHeap[0] = data
                    this.heapify(minHeap, 0)
                }
            }
        }
        return minHeap.map((ele) => ele[0])
    }

    insertInMinHeap(minHeap, k) {
        minHeap.push(k)
        let i = minHeap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (minHeap[pi][1] <= minHeap[i][1]) {
                break
            } else {
                let temp = minHeap[pi]
                minHeap[pi] = minHeap[i]
                minHeap[i] = temp
                i = pi
            }
        }
    }

    heapify(minHeap, i) {
        while (2 * i + 1 < minHeap.length) {
            let left = 2 * i + 1
            let right = 2 * i + 2
            let min = Math.min(minHeap[left][1], minHeap[i][1])
            if (right < minHeap.length) {
                min = Math.min(min, minHeap[right][1])
            }

            if (min == minHeap[i][1]) {
                break
            } else if (min == minHeap[left][1]) {
                let tmp = minHeap[i]
                minHeap[i] = minHeap[left]
                minHeap[left] = tmp
                i = left
            } else {
                let tmp = minHeap[i]
                minHeap[i] = minHeap[right]
                minHeap[right] = tmp
                i = right
            }
        }
    }
}

1 - 1
2 - 2
3 - 3
