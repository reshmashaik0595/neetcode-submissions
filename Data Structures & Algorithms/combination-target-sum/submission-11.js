class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        function solve(runningSum, curr, idx) {
            if (runningSum == target) {
                ans.push([...curr])
                return
            }
            if (runningSum > target) {
                return
            }
            if (idx >= nums.length) {
                return
            }
            curr.push(nums[idx])
            solve(runningSum + nums[idx], curr, idx)
            curr.pop()
            solve(runningSum, curr, idx + 1)

        }
        let ans = []
        let runningSum = 0
        let curr = []
        solve(runningSum, curr, 0)
        return ans;
    }
}
