class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let curr = newInterval
        let ans = []
        for (let i = 0; i < intervals.length; i++) {
            let next = intervals[i]
            if (curr[1] < next[0]) {
                ans.push(curr)
                curr = next
            } else if (next[1] < curr[0]) {
                ans.push(next)
            } else {
                curr[0] = Math.min(curr[0], next[0])
                curr[1] = Math.max(curr[1], next[1])
            }
        }
        ans.push(curr)
        return ans
    }
}
