class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1)
        }
        let totalFirstHalf = Math.floor((nums1.length + nums2.length + 1) / 2)
        // Pick 0 - nums1.length
        let l = 0
        let h = nums1.length
        while (l <= h) {
            // left elements
            let pNums1 = l + Math.floor((h - l) / 2) // nums1 count
            let pNums2 = totalFirstHalf - pNums1 // nums2 cunt

            let ln1 = pNums1 == 0 ? -Infinity : nums1[pNums1 - 1]
            let ln2 = pNums2 == 0 ? -Infinity : nums2[pNums2 - 1]

            let rn1 = pNums1 == nums1.length ? +Infinity : nums1[pNums1]
            let rn2 = pNums2 == nums2.length ? +Infinity : nums2[pNums2]

            if (ln1 <= rn2 && ln2 <= rn1) {
                if ((nums1.length + nums2.length) % 2 == 0) {
                    return (Math.max(ln1, ln2) + Math.min(rn1, rn2)) / 2
                } else {
                    return Math.max(ln1, ln2)
                }
            }


            if (ln1 > rn2) {
                h = pNums1 - 1
            } else {
                l = pNums1 + 1
            }
        }
    }
}
