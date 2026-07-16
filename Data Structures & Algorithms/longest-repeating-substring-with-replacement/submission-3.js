class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freq = new Map()
        let l = 0
        let r = 0
        let max = 0
        while (r < s.length) {
            freq.set(s[r], 1 + (freq.get(s[r]) || 0))
            while ((r - l + 1) - Math.max(...freq.values()) > k) {
                freq.set(s[l], freq.get(s[l]) - 1)
                l++
            }
            let curr = r - l + 1
            max = Math.max(max, curr)
            r++
        }
        return max
    }
}
