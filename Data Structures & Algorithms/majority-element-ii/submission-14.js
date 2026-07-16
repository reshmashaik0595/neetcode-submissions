class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let c1 = null
        let c2 = null
        let ct1 = 0
        let ct2 = 0
        for (let i = 0; i < nums.length; i++) {
            if (c1 == nums[i]) {
                ct1++
            } else if (c2 == nums[i]) {
                ct2++
            }
            else if (ct1 == 0) {
                c1 = nums[i]
                ct1 = 1
            } else if (ct2 == 0) {
                c2 = nums[i]
                ct2 = 1
            } else {
                ct1--
                ct2--
            }
        }

        console.log(c1, c2)

        let ans = new Set()
        ct1 = 0
        ct2 = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == c1) {
                ct1++
            }
            if (nums[i] == c2) {
                ct2++
            }
        }

        console.log(ct1, ct2)

        if (ct1 > (nums.length / 3)) {
            ans.add(c1)
        }

        if (ct2 > (nums.length / 3)) {
            ans.add(c2)
        }

        return [...ans]
    }
}