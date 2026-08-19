class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        function solve(nums, runningSum, target, idx) {
            if (target == runningSum) {
                result.push([...temp])
                return;
            }

            if(runningSum > target){
                return
            }

            if (idx >= nums.length) {
                return;
            }

            temp.push(nums[idx])
            solve(nums, runningSum + nums[idx], target, idx)
            temp.pop()
            solve(nums, runningSum, target, idx + 1)

        }

        let result = []
        let idx = 0
        let temp = []
        let runningSum = 0
        solve(nums, runningSum, target, idx)
        return result
    }
}
