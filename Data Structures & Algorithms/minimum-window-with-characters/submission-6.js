class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) {
            return ""
        }
        let sF = new Array(123).fill(0)
        let tF = new Array(123).fill(0)

        for (let i = 0; i < t.length; i++) {
            tF[t[i].charCodeAt()]++
        }

        let l = 0
        let r = 0
        let min = +Infinity
        let st = -1
        while (r < s.length) {
            sF[s[r].charCodeAt()]++
            while (this.isValid(sF, tF)) {
                if (r - l + 1 < min) {
                    min = r - l + 1
                    st = l
                }
                sF[s[l].charCodeAt()]--
                l++
            }

            r++
        }
        return min == Infinity ? "" : s.substring(st, st + min)
    }

    isValid(sf, tf) {
        for (let i = 0; i <= 123; i++) {
            if (tf[i] > sf[i]) {
                return false
            }
        }
        return true
    }
}
