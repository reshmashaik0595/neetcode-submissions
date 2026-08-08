class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let prefix = 1
        let suffix = 1
        let max = -Infinity
        for (let i = 0; i < nums.length; i++) {
            if (prefix == 0) prefix = 1
            prefix = prefix * nums[i]
            max = Math.max(max, prefix)
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            if (suffix == 0) suffix = 1
            suffix = suffix * nums[i]
            max = Math.max(max, suffix)
        }

        return max == 0 ? 0 : max
    }
}
