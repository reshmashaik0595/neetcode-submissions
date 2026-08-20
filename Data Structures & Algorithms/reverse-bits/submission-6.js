class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        if (n == 0) return 0
        let result = 0
        for (let i = 0; i < 32; i++) {
            result = result << 1
            result = result | (n & 1)
            n = n >>> 1
        }
        return result >>> 0
    }
}
