class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        k = k % nums.length
        this.reverseArr(0, nums.length - 1, nums)
        console.log(nums)
        this.reverseArr(k, nums.length - 1, nums)
        console.log(nums)
        this.reverseArr(0, k - 1, nums)
        return nums
    }

    reverseArr(s, e, nums) {
        while (s < e) {
            let tmp = nums[s]
            nums[s] = nums[e]
            nums[e] = tmp
            s++
            e--
        }
    }
}


// [1,2,3,4,5,6,7,8]
// [2,3,4,5,6,7,8,1] k = 1
// [3,4,5,6,7,8,1,2] k = 2
// [4,5,6,7,8,1,2,3] k = 3
// [5,6,7,8,1,2,3,4] k = 4