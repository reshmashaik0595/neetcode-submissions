class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) {
            return ''
        }

        let tFreq = new Array(123).fill(0)
        for (let i = 0; i < t.length; i++) {
            let ch = t[i]
            tFreq[ch.charCodeAt()]++
        }

        let left = 0
        let sFreq = new Array(123).fill(0)
        let min = +Infinity
        let st = -1
        for (let right = 0; right < s.length; right++) {
            let ch = s[right]
            sFreq[ch.charCodeAt()]++
            while (this.isValidWindow(sFreq, tFreq)) {
                let len = right - left + 1
                if (len < min) {
                    st = left
                    min = len
                }
                sFreq[s[left].charCodeAt()]--
                left++
            }
        }
        if (st == -1) {
            return ''
        }
        return s.substring(st, st + min)
    }

    isValidWindow(sFreq, tFreq) {
        for (let i = 0; i < 123; i++) {
            if (sFreq[i] < tFreq[i]) {
                return false
            }
        }
        return true
    }
}
