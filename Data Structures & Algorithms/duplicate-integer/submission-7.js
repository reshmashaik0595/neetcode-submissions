class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasSeen = new Set()
        for (let i = 0; i < nums.length; i++) {
            if (hasSeen.has(nums[i])) {
                return true
            }
            hasSeen.add(nums[i])
        }
        return false
    }
}
