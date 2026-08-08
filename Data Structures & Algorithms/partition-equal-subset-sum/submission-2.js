class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        function solve(nums, currSum, targetSum, idx) {
            if (currSum === targetSum) return true
            if (idx >= nums.length) return false
            if (dp[idx][currSum] !== -1) return dp[idx][currSum]
            let take = solve(nums, currSum + nums[idx], targetSum, idx + 1)
            let skip = solve(nums, currSum, targetSum, idx + 1)
            return (dp[idx][currSum] = (take || skip))
        }
        let totalSum = nums.reduce((ele, acc = 0) => ele + acc)
        if (totalSum % 2 !== 0) return false
        let targetSum = totalSum / 2
        let dp = new Array(nums.length + 1)
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(targetSum + 1).fill(-1)
        }
        return solve(nums, 0, targetSum, 0)
    }
}
