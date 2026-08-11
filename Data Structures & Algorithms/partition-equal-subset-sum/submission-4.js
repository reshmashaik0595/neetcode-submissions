class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        function solve(target, idx) {
            if (target == 0) {
                return true
            }
            if (idx >= nums.length) {
                return false
            }
            if(dp[target] !== -1) return dp[target]
            let take = solve(target - nums[idx], idx + 1)
            let skip = solve(target, idx + 1)
            return dp[target] = take || skip
        }
        let totalSum = nums.reduce((ele, acc = 0) => ele + acc)
        if ((totalSum % 2) !== 0) return false
        let dp = new Array(totalSum / 2 + 1).fill(-1)
        return solve(totalSum / 2, 0)
    }
}
