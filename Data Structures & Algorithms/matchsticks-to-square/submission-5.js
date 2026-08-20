class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {

        function solve(matchsticks, target, k, isUsed, runningSum, idx) {
            if (k == 1) return true
            if (runningSum == target) {
                return solve(matchsticks, target, k - 1, isUsed, 0, 0)
            }
            if (runningSum > target) return false
            for (let i = idx; i < matchsticks.length; i++) {
                if (isUsed[i] == true) continue
                isUsed[i] = true
                if (solve(matchsticks, target, k, isUsed, runningSum + matchsticks[i], i + 1)) {
                    return true
                }
                isUsed[i] = false
            }
            return false
        }
        let totalSum = matchsticks.reduce((ele, acc) => (ele + acc), 0)
        if (totalSum % 4 !== 0) return false
        let target = totalSum / 4
        let runningSum = 0
        let k = 4
        let isUsed = new Array(matchsticks.length).fill(false)
        return solve(matchsticks, target, k, isUsed, runningSum, 0)
    }
}
