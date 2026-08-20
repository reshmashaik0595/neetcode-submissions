class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length
        let actualSum = nums.reduce((ele, acc) => ele + acc)
        let expectedSum = n * (n + 1) / 2
        return expectedSum - actualSum
    }
}
