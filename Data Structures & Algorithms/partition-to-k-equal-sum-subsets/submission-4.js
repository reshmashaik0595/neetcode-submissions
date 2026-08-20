class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        function solve(nums, partitions, target, runningSum, idx, isUsed) {
            if (partitions == 0) return true
            if (runningSum == target) {
                return solve(nums, partitions - 1, target, 0, 0, isUsed)
            }
            for (let i = idx; i < nums.length; i++) {
                if (isUsed[i]) continue
                if (runningSum + nums[i] > target) continue
                isUsed[i] = true
                if (solve(nums, partitions, target, runningSum + nums[i], i + 1, isUsed)) {
                    return true
                }
                isUsed[i] = false
            }
            return false
        }

        let totalSum = nums.reduce((ele, acc) => acc + ele)
        if (totalSum % k !== 0) return false
        let target = totalSum / k
        let idx = 0
        let runningSum = 0
        let isUsed = new Array(nums.length).fill(false)
        let partitions = k
        return solve(nums, partitions, target, runningSum, idx, isUsed)
    }
}
