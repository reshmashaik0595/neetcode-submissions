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

        while (fast !== null) {
            if (fast == slow) {
                break
            }
            slow = nums[slow]
            fast = nums[nums[fast]]
        }

        slow = nums[0]
        while (fast !== null) {
            if (slow == fast) {
                return slow
            }
            slow = nums[slow]
            fast = nums[fast]
        }

    }
}
