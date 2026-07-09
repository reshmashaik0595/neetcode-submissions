class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let l = Math.max(...nums)
        let r = nums.reduce((ele, acc) => ele + acc)
        let ans = +Infinity;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            if (this.canBe(nums, mid, k)) {
                ans = mid
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return ans
    }

    canBe(nums, sumLimit, k) {
        let split = 1
        let sum = 0
        for (let i = 0; i < nums.length; i++) {
            if ((nums[i] + sum) > sumLimit) {
                sum = nums[i]
                split++
            } else {
                sum = sum + nums[i]
            }
        }
        return split <= k
    }

}
