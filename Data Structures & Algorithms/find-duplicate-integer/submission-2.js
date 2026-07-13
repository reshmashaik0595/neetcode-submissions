class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = nums[0]
        let fast = nums[0]

        slow = nums[slow]
        fast = nums[nums[fast]]
        while (fast !== slow) {
            slow = nums[slow]
            fast = nums[nums[fast]]
        }

        fast = nums[0]
        while (fast !== slow) {
            slow = nums[slow]
            fast = nums[fast]
        }
        return slow
    }
}
