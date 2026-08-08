class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        function solve(currIdx, prevIdx) {
            if (currIdx >= nums.length) return 0
            if (prevIdx !== -1 && dp[currIdx][prevIdx] !== -1) {
                return dp[currIdx][prevIdx]
            }
            let take = 0;
            if (prevIdx == -1 || (nums[prevIdx] < nums[currIdx])) {
                take = 1 + solve(currIdx + 1, currIdx)
            }
            let skip = solve(currIdx + 1, prevIdx)
            return dp[currIdx][prevIdx] = Math.max(take, skip)
        }
        let dp = new Array(nums.length + 1)
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(nums.length + 1).fill(-1)
        }
        return solve(0, -1)
    }
}
