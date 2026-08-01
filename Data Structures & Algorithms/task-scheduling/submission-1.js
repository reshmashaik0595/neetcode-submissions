class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let freqMap = new Map();
        for (let i = 0; i < tasks.length; i++) {
            freqMap.set(tasks[i], 1 + (freqMap.get(tasks[i]) || 0));
        }
        let maxHeap = [...freqMap];
        this.buildMaxHeap(maxHeap);

        let ans = 0;
        while (maxHeap.length > 0) {
            let temp = [];
            for (let i = 0; i < n + 1; i++) {
                if (maxHeap.length == 0) break;
                let max = this.extractMax(maxHeap);
                let ch = max[0];
                let freq = max[1];
                temp.push([ch, freq]);
            }

            for (let i = 0; i < temp.length; i++) {
                let ch = temp[i][0]
                let freq = temp[i][1] - 1
                if (freq == 0) continue
                this.insertInMaxHeap(maxHeap, [ch, freq])
            }

            if (maxHeap.length == 0) {
                ans = ans + temp.length;
            } else {
                ans = ans + n + 1;
            }
        }
        return ans;
    }

    buildMaxHeap(maxHeap) {
        let n = maxHeap.length
        let lastNonLeafNode = Math.floor(n / 2) - 1
        for (let i = lastNonLeafNode; i >= 0; i--) {
            this.heapifyDown(maxHeap, i)
        }
    }

    extractMax(maxHeap) {
        if (maxHeap.length == 1) return maxHeap.pop()
        let max = maxHeap[0]
        maxHeap[0] = maxHeap.pop()
        this.heapifyDown(maxHeap, 0)
        return max
    }

    insertInMaxHeap(maxHeap, data) {
        maxHeap.push(data)
        let i = maxHeap.length - 1
        while (i > 0) {
            let pi = Math.floor((i - 1) / 2)
            if (maxHeap[pi][1] > maxHeap[i][1]) break;
            let temp = maxHeap[pi]
            maxHeap[pi] = maxHeap[i]
            maxHeap[i] = temp
            i = pi
        }
    }

    heapifyDown(maxHeap, i) {
        while ((2 * i) + 1 < maxHeap.length) {
            let left = (2 * i) + 1
            let right = (2 * i) + 2
            let max = Math.max(maxHeap[i][1], maxHeap[left][1])
            if (right < maxHeap.length) {
                max = Math.max(max, maxHeap[right][1])
            }

            if (max == maxHeap[i][1]) break
            if (max == maxHeap[left][1]) {
                let temp = maxHeap[left]
                maxHeap[left] = maxHeap[i]
                maxHeap[i] = temp
                i = left
            } else {
                let temp = maxHeap[right]
                maxHeap[right] = maxHeap[i]
                maxHeap[i] = temp
                i = right
            }
        }
    }
}
