class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let min = this.findMin(nums)
        console.log(min)
        if (this.searchTargetI(0, min - 1, nums, target)) {
            return true
        }

        if (this.searchTargetI(min, nums.length - 1, nums, target)) {
            return true
        }

        return false
    }

    findMin(nums) {
        let l = 0
        let h = nums.length - 1
        while (l < h) {
            while (l < h && nums[l] == nums[l + 1]) {
                l++
            }
            while (l < h && nums[h] == nums[h - 1]) {
                h--
            }
            let mid = l + Math.floor((h - l) / 2)

            if (nums[mid] > nums[h]) {
                l = mid + 1
            } else {
                h = mid
            }
        }
        return h
    }

    searchTargetI(l, h, nums, target) {
        while (l <= h) {
            let mid = l + Math.floor((h - l) / 2)
            if (nums[mid] == target) {
                return true
            }

            if (nums[mid] < target) {
                l = mid + 1
            } else {
                h = mid - 1
            }
        }
        return false
    }
}
