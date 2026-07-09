/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        let pivot = this.findPeak(mountainArr)
        let res = this.searchTarget(mountainArr, 0, pivot - 1, target)
        if (res !== -1) {
            return res
        }

        res = this.reverseSearchTarget(mountainArr, pivot, mountainArr.length(), target)
        if (res !== -1) {
            return res
        }
        return -1

    }

    findPeak(nums) {
        let l = 0
        let r = nums.length() - 1
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            let ele = nums.get(mid)
            let ele1 = nums.get(mid - 1)
            let ele2 = nums.get(mid + 1)

            if (ele1 < ele && ele > ele2) {
                return mid
            }

            if (ele1 > ele) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }

    searchTarget(nums, l, r, target) {
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            if (nums.get(mid) == target) {
                return mid
            }

            if (nums.get(mid) < target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return -1
    }

    reverseSearchTarget(nums, l, r, target) {
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            if (nums.get(mid) == target) {
                return mid
            }

            if (nums.get(mid) > target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return -1
    }

}
