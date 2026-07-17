class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let min = this.findMin(nums)
        console.log(min)
        let val = this.searchTarget(0, min - 1, nums, target)
        if (val !== -1) {
            return val
        }
        val = this.searchTarget(min, nums.length - 1, nums, target)
        if (val !== -1) {
            return val
        }

        return -1
    }

    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        let ans = 0
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            if (nums[mid] >= nums[0]) {
                l = mid + 1
            } else {
                ans = mid
                r = mid - 1
            }
        }
        return ans
    }

    searchTarget(s, e, nums, target) {
        while (s <= e) {
            let mid = s + Math.floor((e - s) / 2)
            if (nums[mid] == target) {
                return mid
            }

            if (nums[mid] > target) {
                e = mid - 1
            } else {
                s = mid + 1
            }
        }
        return -1
    }
}
