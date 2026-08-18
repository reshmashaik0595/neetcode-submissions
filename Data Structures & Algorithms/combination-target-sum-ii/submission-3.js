class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates = candidates.sort((a, b) => a - b)
        function solve(idx, target, curr) {
            if (target == 0) {
                result.push([...curr])
                return
            }
            if (idx >= candidates.length) return
            if (target < 0) return

            for (let i = idx; i < candidates.length; i++) {
                if (i > idx && candidates[i] == candidates[i - 1]) continue
                curr.push(candidates[i])
                solve(i + 1, target - candidates[i], curr)
                curr.pop()
            }
        }
        let result = []
        solve(0, target, [])
        return result
    }
}
