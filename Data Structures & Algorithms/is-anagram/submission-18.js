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
            let chS = s[i]
            let chT = t[i]
            sFreq.set(chS, 1 + (sFreq.get(chS) || 0))
            tFreq.set(chT, 1 + (tFreq.get(chT) || 0))
        }
        for (let i = 0; i < s.length; i++) {
            let ch = s[i]
            let sF = sFreq.get(ch)
            let tF = tFreq.get(ch)
            if (sF !== tF) {
                return false
            }
        }
        return true
    }
}
