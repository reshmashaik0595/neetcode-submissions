class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let pivot = this.findMin(nums)
        let res1 = this.searchTarget(nums, 0, pivot - 1, target)
        if (res1 !== -1) {
            return res1
        }

        let res2 = this.searchTarget(nums, pivot, nums.length - 1, target)
        if (res2 !== -1) {
            return res2
        }
        return -1
    }

    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        let ans = nums[0]
        let idx = -1
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            if (nums[mid] < ans) {
                ans = nums[mid]
                idx = mid
            }

            if (nums[mid] < nums[r]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return idx
    }

    searchTarget(nums, l, r, target) {
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            if (nums[mid] == target) {
                return mid
            }

            if (nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return -1
    }
}
