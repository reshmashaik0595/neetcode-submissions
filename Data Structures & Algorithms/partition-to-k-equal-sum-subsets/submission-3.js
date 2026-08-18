class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        function solve(nums, k, target, curr, isUsed, idx) {
            if (k == 1)
                return true
            if (target === curr)
                return solve(nums, k - 1, target, 0, isUsed, 0)

            for (let i = idx; i < nums.length; i++) {
                if (isUsed[i]) continue
                if (curr + nums[i] > target) continue
                isUsed[i] = true
                if (solve(nums, k, target, curr + nums[i], isUsed, i + 1))
                    return true
                isUsed[i] = false
            }

            return false
        }

        let totalSum = nums.reduce((ele, acc) => ele + acc)
        if (totalSum % k !== 0) return false
        let target = totalSum / k
        let isUsed = new Array(nums.length).fill(false)
        return solve(nums, k, target, 0, isUsed, 0)
    }
}
