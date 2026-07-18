class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let min = Math.max(...nums)
        let max = nums.reduce((ele, acc) => ele + acc)
        let ans;
        while (min <= max) {
            let mid = min + Math.floor((max - min) / 2)
            if (this.canSplit(nums, mid, k)) {
                ans = mid
                max = mid - 1
            } else {
                min = mid + 1
            }
        }
        return ans
    }

    canSplit(nums, mid, k) {
        let splits = 1
        let sum = 0
        for (let i = 0; i < nums.length; i++) {
            if (sum + nums[i] <= mid) {
                sum = sum + nums[i]
            } else {
                splits++
                sum = nums[i]
            }
        }
        return splits <= k
    }
}
