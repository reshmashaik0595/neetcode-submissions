class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    combinationSum4(nums, target) {
        function solve(target, idx) {
            if (target == 0) return 1
            if (idx >= nums.length || target < 0) return 0
            if (dp[target] !== -1) return dp[target]
            let take = solve(target - nums[idx], 0)
            let skip = solve(target, idx + 1)
            return dp[target] = take + skip
        }
        let dp = new Array(target + 1).fill(-1)
        return solve(target, 0)
    }
}
