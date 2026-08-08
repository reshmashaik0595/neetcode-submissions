class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        function solve(nums, currSum, targetSum, i) {
            if (currSum == targetSum) return true
            if (i >= nums.length) return false
            if (dp[i][currSum] !== -1) return dp[i][currSum]
            let take = solve(nums, currSum + nums[i], targetSum, i + 1)
            let skip = solve(nums, currSum, targetSum, i + 1)
            return dp[i][currSum] = take || skip
        }
        let totalSum = nums.reduce((ele, acc = 0) => ele + acc)
        if (totalSum % 2 !== 0) return false
        let targetSum = totalSum / 2;
        let dp = new Array(nums.length)
        for (let i = 0; i < dp.length; i++) {
            dp[i] = new Array(targetSum + 1).fill(-1)
        }
        return solve(nums, 0, targetSum, 0)
    }
}


// 2 ) 10(5
//     10
//     ---
//     0
//     ---