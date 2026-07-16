class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        let sFreq = new Map()
        let tFreq = new Map()
        for (let i = 0; i < s.length; i++) {
            sFreq.set(s[i], 1 + (sFreq.get(s[i]) || 0))
            tFreq.set(t[i], 1 + (tFreq.get(t[i]) || 0))
        }

        for (let i = 0; i < s.length; i++) {
            if (tFreq.get(s[i])  !== sFreq.get(s[i]) ) {
                return false
            }
        }
        return true
    }
}
