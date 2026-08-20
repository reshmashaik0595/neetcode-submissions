class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        function solve(matchsticks, partitions, target, runningSum, idx) {
            if (partitions == 0) return true
            if (runningSum == target) {
                return solve(matchsticks, partitions - 1, target, 0, 0)
            }
            for (let i = idx; i < matchsticks.length; i++) {
                if (isUsed[i]) continue
                if (matchsticks[i] + runningSum > target) continue
                isUsed[i] = true
                if (solve(matchsticks, partitions, target, runningSum + matchsticks[i], i + 1)) {
                    return true
                }
                isUsed[i] = false
            }
            return false
        }

        let totalSum = matchsticks.reduce((ele, acc) => (ele + acc), 0)
        if (totalSum % 4 !== 0) return false
        let target = totalSum / 4
        let partitions = 4
        let idx = 0
        let runningSum = 0
        let isUsed = new Array(matchsticks.length).fill(false)
        return solve(matchsticks, partitions, target, runningSum, idx, isUsed)
    }
}
