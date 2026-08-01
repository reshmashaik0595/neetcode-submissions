class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @return {string}
     */
    longestDiverseString(a, b, c) {
        let maxHeap = []
        if (a > 0) maxHeap.push(['a', a])
        if (b > 0) maxHeap.push(['b', b])
        if (c > 0) maxHeap.push(['c', c])
        this.buildMaxHeap(maxHeap)
        let str = ''
        while (maxHeap.length > 0) {
            let max = this.extractMax(maxHeap)
            if (str.length >= 2) {
                let ch = max[0]
                if (str[str.length - 1] == ch && str[str.length - 2] == ch) {
                    if (maxHeap.length == 0) break;
                    let max_2 = this.extractMax(maxHeap)
                    let ch_2 = max_2[0]
                    let freq_2 = max_2[1] - 1
                    str = str + ch_2
                    if (freq_2 > 0) this.insertInMaxHeap(maxHeap, [ch_2, freq_2])
                    this.insertInMaxHeap(maxHeap, max)
                } else {
                    let freq = max[1] - 1
                    str = str + ch
                    if (freq > 0) this.insertInMaxHeap(maxHeap, [ch, freq])
                }
            } else {
                let ch = max[0]
                let freq = max[1] - 1
                str = str + ch
                if (freq > 0) this.insertInMaxHeap(maxHeap, [ch, freq])
            }
        }
        return str
    }

    buildMaxHeap(maxHeap) {
        let n = maxHeap.length
        let lastNonLeafNode = Math.floor(n / 2) - 1
        for (let i = lastNonLeafNode; i >= 0; i--) {
            this.heapifyDown(maxHeap, i)
        }
    }

    heapifyDown(maxHeap, i) {
        while ((2 * i) + 1 < maxHeap.length) {
            let left = (2 * i) + 1
            let right = (2 * i) + 2
            let max = Math.max(maxHeap[i][1], maxHeap[left][1])
            if (right < maxHeap.length)
                max = Math.max(max, maxHeap[right][1])
            if (max == maxHeap[i][1]) break;
            if (max == maxHeap[left][1]) {
                let tmp = maxHeap[left]
                maxHeap[left] = maxHeap[i]
                maxHeap[i] = tmp
                i = left
            } else {
                let tmp = maxHeap[right]
                maxHeap[right] = maxHeap[i]
                maxHeap[i] = tmp
                i = right
            }
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
            let tmp = maxHeap[pi]
            maxHeap[pi] = maxHeap[i]
            maxHeap[i] = tmp
            i = pi
        }
    }
}
