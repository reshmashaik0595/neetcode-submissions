class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        let ans = 0;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            if (nums[mid] < nums[0]) {
                ans = mid
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return nums[ans]
    }
}
