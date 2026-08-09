class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums = nums.sort((a, b) => a - b)
        let min = +Infinity
        let st = 0
        let en = k - 1
        while (en < nums.length) {
            let diff = nums[en] - nums[st]
            min = Math.min(min, diff)
            st++
            en++
        }
        return min
    }
}
