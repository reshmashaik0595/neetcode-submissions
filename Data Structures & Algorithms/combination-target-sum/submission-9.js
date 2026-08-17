class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let ans = []
        function solve(nums, target, idx, curr) {
            if (idx >= nums.length) return
            if (target === 0) {
                ans.push([...curr])
                return
            }
            if (target < 0) return
            curr.push(nums[idx])
            solve(nums, target - nums[idx], idx, curr)
            curr.pop()
            solve(nums, target, idx + 1, curr)
        }
        let curr = []
        let idx = 0
        solve(nums, target, idx, curr)
        return ans
    }
}
