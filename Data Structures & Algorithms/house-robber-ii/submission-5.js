class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        function maxAmount(nums, i) {
            if (i >= nums.length) return 0
            if (dp[i] !== -1) return dp[i]
            let steal = nums[i] + maxAmount(nums, i + 2)
            let skip = maxAmount(nums, i + 1)
            return dp[i] = Math.max(steal, skip)
        }
        if (nums.length === 1) return nums[0]
        let nums1 = nums.slice(0, nums.length - 1)
        let dp = new Array(nums1.length + 1).fill(-1)
        let stealFirst = maxAmount(nums1, 0)

        let nums2 = nums.slice(1)
        dp = new Array(nums2.length + 1).fill(-1)
        let skipFirst = maxAmount(nums2, 0)

        return Math.max(stealFirst, skipFirst)
    }
}