class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let s = 0
        let e = nums.length - 1
        while (s <= e) {
            let mid = s + Math.floor((e - s) / 2)
            if (nums[mid] == target) {
                return mid
            }

            if (nums[mid] < target) {
                s = mid + 1
            } else {
                e = mid - 1
            }
        }

        return -1
    }
}
