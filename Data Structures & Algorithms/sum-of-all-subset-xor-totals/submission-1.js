class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        function XOR(temp) {
            return temp.reduce((ele, xor) => (ele ^ xor), 0)
        }

        function generateSubsets(nums, temp, idx) {
            if (idx >= nums.length) {
                result = result + XOR(temp)
                return;
            }

            temp.push(nums[idx])
            generateSubsets(nums, temp, idx + 1)
            temp.pop()
            generateSubsets(nums, temp, idx + 1)
        }

        let result = 0;
        let temp = [];
        let idx = 0;
        generateSubsets(nums, temp, idx)
        return result
    }
}
