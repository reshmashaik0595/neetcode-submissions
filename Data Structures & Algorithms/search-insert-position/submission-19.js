class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0
        let right = nums.length - 1
        let ans;
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2)
            if(nums[mid] == target){
                return mid
            }
            if (nums[mid] > target) {
                ans = mid
                right = mid - 1
            } else {
                ans = mid + 1
                left = mid + 1
            }
        }
        return ans
    }
}
