class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        let ans = nums[0]
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            ans = Math.min(nums[mid], ans)
            if (nums[mid] > nums[r]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return ans
    }
}
