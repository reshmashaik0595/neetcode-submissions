class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let map = new Map()
        for (let i = 0; i < tasks.length; i++) {
            map.set(tasks[i], 1 + (map.get(tasks[i]) || 0))
        }

        let maxHeap = this.buildMaxHeap([...map])
        let time = 0
        while (maxHeap.length > 0) {
            let tmp = []
            for (let ct = 0; ct < n + 1 && maxHeap.length > 0; ct++) {
                let max = this.extractMax(maxHeap)
                let freq = (map.get(max[0]) || 0) - 1
                map.set(max[0], freq)
                tmp.push([max[0], freq])
            }

            for (let i = 0; i < tmp.length; i++) {
                if (tmp[i][1] == 0) continue
                this.insertInMaxHeap(tmp[i], maxHeap)
            }

            if (maxHeap.length == 0) {
                time = time + tmp.length
            } else {
                time = time + n + 1
            }
        }
        return time
    }

    buildMaxHeap(maxHeap) {
        let n = maxHeap.length
        let lastNonLeaf = Math.floor(n / 2) - 1
        for (let i = lastNonLeaf; i >= 0; i--) {
            this.heapifyDown(i, maxHeap)
        }
        return maxHeap;
    }

    heapifyDown(i, maxHeap) {
        while (((2 * i) + 1) < maxHeap.length) {
            let left = (2 * i) + 1
            let right = (2 * i) + 2
            let max = Math.max(maxHeap[i][1], maxHeap[left][1])
            if (right < maxHeap.length) {
                max = Math.max(max, maxHeap[right][1])
            }
            if (max == maxHeap[i][1]) break
            if (max == maxHeap[left][1]) {
                let tmp = maxHeap[i]
                maxHeap[i] = maxHeap[left]
                maxHeap[left] = tmp
                i = left
            } else {
                let tmp = maxHeap[i]
                maxHeap[i] = maxHeap[right]
                maxHeap[right] = tmp
                i = right
            }
        }
    }

    extractMax(maxHeap) {
        if (maxHeap.length === 1)
            return maxHeap.pop()

        let max = maxHeap[0]
        maxHeap[0] = maxHeap.pop()
        this.heapifyDown(0, maxHeap)
        return max
    }

    insertInMaxHeap(val, maxHeap) {
        maxHeap.push(val)
        let i = maxHeap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (maxHeap[pi][1] < maxHeap[i][1]) break
            let tmp = maxHeap[i]
            maxHeap[i] = maxHeap[pi]
            maxHeap[pi] = tmp
            i = pi
        }
    }
}
