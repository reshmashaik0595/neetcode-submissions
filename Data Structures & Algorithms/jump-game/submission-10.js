class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        function solve(nums, idx) {
            if (idx >= nums.length - 1) {
                return true
            }
            if (dp[idx] !== -1) return dp[idx]
            for (let i = 1; i <= nums[idx]; i++) {
                if (solve(nums, idx + i)) {
                    return dp[idx] = true
                }
            }
            return dp[idx] = false
        }
        let dp = new Array(nums.length).fill(-1)
        return solve(nums, 0)
    }
}
