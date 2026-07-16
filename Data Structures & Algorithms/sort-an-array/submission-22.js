class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.patitionAndMerge(0, nums.length - 1, nums)
        return nums
    }

    patitionAndMerge(s, e, nums) {
        if (s >= e) {
            return
        }

        let mid = s + Math.floor((e - s) / 2)
        this.patitionAndMerge(s, mid, nums)
        this.patitionAndMerge(mid + 1, e, nums)
        this.mergeSort(s, mid, e, nums)
    }

    mergeSort(s, mid, e, nums) {
        let nums1 = new Array(mid - s + 1)
        let nums2 = new Array(e - (mid + 1) + 1)

        let k = 0
        for (let i = s; i <= mid; i++) {
            nums1[k] = nums[i]
            k++
        }

        k = 0
        for (let i = mid + 1; i <= e; i++) {
            nums2[k] = nums[i]
            k++
        }

        k = s
        let i = 0
        let j = 0
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                nums[k] = nums1[i]
                i++
                k++
            } else {
                nums[k] = nums2[j]
                j++
                k++
            }
        }

        while (i < nums1.length) {
            nums[k] = nums1[i]
            i++
            k++
        }

        while (j < nums2.length) {
            nums[k] = nums2[j]
            j++
            k++
        }
    }
}
