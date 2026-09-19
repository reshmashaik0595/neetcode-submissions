class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let hasSeen = new Set()
        let left = 0
        let max = 0
        for (let right = 0; right < s.length; right++) {
            while (hasSeen.has(s[right])) {
                hasSeen.delete(s[left])
                left++
            }
            hasSeen.add(s[right])
            let curr = right - left + 1
            max = Math.max(max, curr)
        }
        return max
    }
}
