class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        if (target < nums) {
            return 0
        }
        else if (target > nums[nums.length - 1]) {
            return nums.length
        }

        let l = 0
        let h = nums.length - 1
        let pos;
        while (l <= h) {
            let mid = l + Math.floor((h - l) / 2)
            if (nums[mid] == target) {
                return mid
            }

            if (nums[mid] < target) {
                pos = mid + 1
                l = mid + 1
            } else {
                pos = mid
                h = mid - 1
            }
        }
        return pos
    }
}
