class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    combinationSum4(nums, target) {
        function solve(nums, target, idx) {
            if (target === 0) {
                return 1
            }
            if (idx >= nums.length || target < 0) {
                return 0
            }
            if (dp[idx][target] !== -1) {
                return dp[idx][target]
            }
            let take_idx = solve(nums, target - nums[idx], 0)
            let skip_idx = solve(nums, target, idx + 1)
            return dp[idx][target] = (take_idx + skip_idx)
        }
        let dp = new Array(nums.length + 1)
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(target + 1).fill(-1)
        }
        return solve(nums, target, 0)
    }
}
