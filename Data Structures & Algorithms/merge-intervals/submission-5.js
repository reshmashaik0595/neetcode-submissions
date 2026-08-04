class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals = intervals.sort((a, b) => a[0] - b[0])
        let curr = intervals[0]
        let ans = []
        for (let i = 1; i < intervals.length; i++) {
            let next = intervals[i]
            if (curr[1] < next[0]) {
                ans.push(curr)
                curr = next
            } else {
                let st = Math.min(curr[0], next[0])
                let en = Math.max(curr[1], next[1])
                curr = [st, en]
            }
        }
        ans.push(curr)
        return ans
    }
}
