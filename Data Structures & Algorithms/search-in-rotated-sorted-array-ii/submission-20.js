class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let pivot = this.findMin(nums)
        console.log(pivot, nums[pivot], target)
        let res1 = this.searchTarget(nums, 0, pivot - 1, target)
        if (res1) {
            return res1
        }

        let res2 = this.searchTarget(nums, pivot, nums.length - 1, target)
        if (res2) {
            return res2
        }

        return false
    }

    searchTarget(nums, l, r, target) {
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            console.log(nums[mid], target)
            if (nums[mid] == target) {
                return true
            }

            if (nums[mid] < target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        return false
    }

    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        let ans = nums[0]
        let idx = 0
        while (l <= r) {
            while (l < r && nums[l] == nums[l + 1]) {
                l++
            }

            while (r > l && nums[r] == nums[r - 1]) {
                r--
            }
            let mid = l + Math.floor((r - l) / 2)
            if (nums[mid] <= ans) {
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
}
