class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        function performXOR(arr) {
            let xor = 0
            for (let i = 0; i < arr.length; i++) {
                xor = xor ^ arr[i]
            }
            sum = sum + xor
        }

        function solve(idx, curr) {
            if (idx >= nums.length) {
                performXOR(curr)
                return
            }
            curr.push(nums[idx])
            solve(idx + 1, curr)
            curr.pop()
            solve(idx + 1, curr)
        }

        let sum = 0
        solve(0, [])
        return sum
    }
}
