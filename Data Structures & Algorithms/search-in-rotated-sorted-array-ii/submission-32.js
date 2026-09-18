class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        function findMinimum(nums) {
            let left = 0
            let right = nums.length - 1
            while (left < right) {
                while (left < right && nums[left] == nums[left + 1]) {
                    left++
                }
                while (left < right && nums[right] == nums[right - 1]) {
                    right--
                }
                let mid = left + Math.floor((right - left) / 2)
                if (nums[mid] > nums[right]) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
            return right
        }

        function solve(nums, target) {
            let min = findMinimum(nums)
            if (nums[min] == target) return true
            if (searchTarget(nums, 0, min - 1, target)) {
                return true
            }
            if (searchTarget(nums, min + 1, nums.length - 1, target)) {
                return true
            }
            return false
        }

        function searchTarget(nums, left, right, target) {
            while (left <= right) {
                let mid = left + Math.floor((right - left) / 2)
                if (nums[mid] == target) {
                    return true
                }
                if (nums[mid] < target) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
            return false
        }

        return solve(nums, target)
    }
}
