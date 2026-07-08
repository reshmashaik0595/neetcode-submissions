class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let n = nums1.length
        let m = nums2.length

        if (n > m) {
            return this.findMedianSortedArrays(nums2, nums1)
        }
        let l = 0
        let r = n

        while (l <= r) {
            let px = l + Math.floor((r - l) / 2)
            let py = Math.floor((n + m + 1) / 2) - px


            let x1 = px == 0 ? -Infinity : nums1[px - 1]
            let x2 = py == 0 ? -Infinity : nums2[py - 1]
            let x3 = px == n ? +Infinity : nums1[px]
            let x4 = py == m ? +Infinity : nums2[py]

            if (x1 <= x4 && x2 <= x3) {
                if ((n + m) % 2 == 0) {
                    return (Math.max(x1, x2) + Math.min(x3, x4)) / 2
                } else {
                    return Math.max(x1, x2)
                }
            }

            if (x1 > x4) {
                r = px - 1
            } else {
                l = px + 1
            }
        }
    }
}

