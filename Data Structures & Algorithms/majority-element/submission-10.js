class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let nums1 = null
        let count = 0
        for (let i = 0; i < nums.length; i++) {
            if (count === 0) {
                nums1 = nums[i]
                count++
            } else if (nums[i] == nums1) {
                count++
            } else {
                count--
            }
        }
        return nums1
    }
}
