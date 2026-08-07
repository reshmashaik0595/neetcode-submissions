class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // Recursion
        // Time: 2 ^ N; Space: 0(N)
        // function solve(nums, i) {
        //     if (i >= nums.length) return 0
        //     let steal = nums[i] + solve(nums, i + 2)
        //     let skip = solve(nums, i + 1)
        //     return Math.max(steal, skip)
        // }
        // return solve(nums, 0)

        // Recursion + Memoization
        // Time: 0(N); Space: 0(N)
        function solve(nums, i) {
            if (i >= nums.length) return 0
            if (dp[i] !== -1) return dp[i]
            let steal = nums[i] + solve(nums, i + 2)
            let skip = solve(nums, i + 1)
            return dp[i] = Math.max(steal, skip)
        }
        let dp = new Array(nums.length + 1).fill(-1)
        return solve(nums, 0)
    }
}
