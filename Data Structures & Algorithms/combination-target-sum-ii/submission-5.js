class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates = candidates.sort((a, b) => a - b)
        function solve(candidates, runningSum, target, idx, temp) {
            if (target == runningSum) {
                result.push([...temp])
                return
            }

            if (idx >= candidates.length) {
                return
            }

            for (let i = idx; i < candidates.length; i++) {
                if (i > idx && candidates[i] == candidates[i - 1]) continue
                if (runningSum + candidates[i] > target) continue
                temp.push(candidates[i])
                solve(candidates, runningSum + candidates[i], target, i + 1, temp)
                temp.pop()
            }
        }

        let runningSum = 0
        let idx = 0
        let temp = []
        let result = []
        solve(candidates, runningSum, target, idx, temp)
        return result
    }
}
