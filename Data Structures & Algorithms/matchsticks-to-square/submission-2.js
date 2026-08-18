class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        let totalSum = matchsticks.reduce((ele, acc) => ele + acc)
        if (totalSum % 4 !== 0) return false
        let target = totalSum / 4
        function solve(matchsticks, k, target, idx, curr, isUsed) {
            if (k == 1) return true
            if (target == curr)
                return solve(matchsticks, k - 1, target, 0, 0, isUsed)
            for (let i = idx; i < matchsticks.length; i++) {
                if (isUsed[i]) continue
                if (matchsticks[i] + curr > target) continue
                isUsed[i] = true
                if (solve(matchsticks, k, target, i + 1, curr + matchsticks[i], isUsed))
                    return true
                isUsed[i] = false
            }
            return false
        }
        let isUsed = new Array(matchsticks.length).fill(false)
        return solve(matchsticks, 4, target, 0, 0, isUsed)
    }
}
