class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        function solve(cIdx, pIdx) {
            if (cIdx >= nums.length) {
                return 0
            }
            if (pIdx !== -1 && dp[cIdx][pIdx] !== -1) {
                return dp[cIdx][pIdx]
            }
            let take = 0
            if (pIdx == -1 || nums[pIdx] < nums[cIdx]) {
                take = 1 + solve(cIdx + 1, cIdx)
            }
            let skip = solve(cIdx + 1, pIdx)
            return dp[cIdx][pIdx] = Math.max(take, skip)
        }
        let dp = new Array(nums.length + 1)
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(nums.length + 1).fill(-1)
        }
        return solve(0, -1)
    }
}
