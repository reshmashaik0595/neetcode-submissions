class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        function solve(nums, i) {
            if (i >= nums.length) return 0;
            if (dp[i] !== -1) return dp[i];
            let take = nums[i] + solve(nums, i + 2);
            let skip = solve(nums, i + 1);
            return dp[i] = Math.max(take, skip)
        }
        let dp = new Array(nums.length).fill(-1)
        return solve(nums, 0)
    }
}
