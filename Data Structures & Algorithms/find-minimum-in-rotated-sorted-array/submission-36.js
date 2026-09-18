class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1
        let ans = 0;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2)
            if (nums[mid] < nums[0]) {
                ans = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return nums[ans]
    }
}
