class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let h = nums.length - 1
        while (l < h) {
            let mid = l + Math.floor((h - l) / 2)
            if (nums[mid] > nums[h]) {
                l = mid + 1
            } else {
                h = mid
            }
        }
        return nums[h]
    }
}
