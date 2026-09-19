class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pf = 1
        let pArray = new Array(nums.length).fill(1)
        for (let i = 1; i < nums.length; i++) {
            pf = pf * nums[i - 1]
            pArray[i] = pf
        }

        let sf = 1
        let sArray = new Array(nums.length).fill(1)
        for (let i = nums.length - 2; i >= 0; i--) {
            sf = sf * nums[i + 1]
            sArray[i] = sf
        }
        // console.log(pArray)
        // console.log(sArray)
        let ans = []
        for (let i = 0; i < nums.length; i++) {
            if (i == 0) {
                ans.push(sArray[i])
            } else if (i == nums.length - 1) {
                ans.push(pArray[i])
            } else {
                ans.push(sArray[i] * pArray[i])
            }
        }
        return ans
    }
}
