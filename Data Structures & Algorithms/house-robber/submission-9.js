class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        function solve(nums, idx = 0) {
            if (idx >= nums.length) {
                return 0
            }
            if (dp[idx] !== -1) return dp[idx]
            let take = nums[idx] + solve(nums, idx + 2)
            let skip = solve(nums, idx + 1)
            return dp[idx] = Math.max(take, skip)
        }
        let dp = new Array(nums.length + 1).fill(-1)
        return solve(nums)
    }
}
