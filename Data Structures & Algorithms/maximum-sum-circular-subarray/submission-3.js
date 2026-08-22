class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        function minSubarray(nums) {
            let minSum = nums[0]
            let currMinSum = nums[0]

            let maxSum = nums[0]
            let currMaxSum = nums[0]
            for (let i = 1; i < nums.length; i++) {
                currMinSum = Math.min(nums[i], currMinSum + nums[i])
                minSum = Math.min(minSum, currMinSum)

                currMaxSum = Math.max(nums[i], currMaxSum + nums[i])
                maxSum = Math.max(maxSum, currMaxSum)
            }
            return [minSum, maxSum]
        }

        let totalSum = nums.reduce((ele, acc) => ele + acc)
        let result = minSubarray(nums)
        let minSum = result[0]
        let maxSum = result[1]
        let circularSum = totalSum - minSum
        if (maxSum > 0) return Math.max(maxSum, circularSum)
        return maxSum
    }
}
