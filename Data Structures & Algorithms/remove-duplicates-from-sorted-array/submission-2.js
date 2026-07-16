class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k = 0
        let i = 0
        while (i < nums.length) {
            while (nums[i] == nums[i + 1]) {
                i++
            }
            nums[k++] = nums[i++]
        }
        return k
    }
}
