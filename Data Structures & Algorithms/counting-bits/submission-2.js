class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let ans = []
        for (let i = 0; i <= n; i++) {
            ans.push(this.count(i))
        }
        return ans
    }

    count(n) {
        let cnt = 0
        while (n > 0) {
            if ((n & 1) == 1) {
                cnt++
            }
            n = n >> 1
        }
        return cnt
    }
}
