class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals = intervals.sort((a, b) => a[0] - b[0])
        let curr = intervals[0]
        let count = 0
        for (let i = 1; i < intervals.length; i++) {
            let next = intervals[i]
            if (curr[1] > next[0]) { //overlapping
                count++
                if (curr[1] > next[1]) {
                    curr = next
                }
            } else {//non-overlapping
                curr = next
            }
        }
        return count
    }
}
