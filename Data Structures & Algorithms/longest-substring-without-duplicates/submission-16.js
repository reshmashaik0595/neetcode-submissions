class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let hasSeen = new Set()
        let l = 0
        let r = 0
        let max = 0
        while (r < s.length) {
            while (hasSeen.has(s[r])) {
                hasSeen.delete(s[l])
                l++
            }
            hasSeen.add(s[r])
            let curr = r - l + 1
            max = Math.max(max, curr)
            r++
        }
        return max
    }
}
