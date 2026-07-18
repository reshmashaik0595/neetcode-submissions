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
        let peek = this.findPeek(mountainArr)
        if (mountainArr.get(peek) == target) {
            return peek
        }
        let s1 = this.findTarget(mountainArr, 0, peek - 1, target)
        if (s1 !== -1) {
            return s1
        }

        let s2 = this.findTargetI(mountainArr, peek + 1, mountainArr.length() - 1, target)
        if (s2 !== -1) {
            return s2
        }

        return -1


    }

    findPeek(arr) {
        let l = 0
        let h = arr.length() - 1
        while (l <= h) {
            let mid = l + Math.floor((h - l) / 2)
            if (mid == arr.length() - 1 || mid == 0) {
                return mid
            }

            if (arr.get(mid) > arr.get(mid + 1) && arr.get(mid) > arr.get(mid - 1)) {
                return mid
            }

            if (arr.get(mid) < arr.get(mid + 1)) {
                l = mid + 1
            } else {
                h = mid - 1
            }
        }
    }

    findTarget(arr, l, h, target) {
        while (l <= h) {
            let mid = l + Math.floor((h - l) / 2)
            if (arr.get(mid) == target) {
                return mid
            }

            if (arr.get(mid) < target) {
                l = mid + 1
            } else {
                h = mid - 1
            }
        }

        return -1
    }

    findTargetI(arr, l, h, target) {
        while (l <= h) {
            let mid = l + Math.floor((h - l) / 2)
            if (arr.get(mid) == target) {
                return mid
            }

            if (arr.get(mid) > target) {
                l = mid + 1
            } else {
                h = mid - 1
            }
        }

        return -1
    }
}
