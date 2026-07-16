class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let freqS1 = new Array(123).fill(0)
        let freqS2 = new Array(123).fill(0)

        for (let i = 0; i < s1.length; i++) {
            freqS1[s1[i].charCodeAt()]++
        }

        let l = 0
        let r = 0
        while (r < s2.length) {
            freqS2[s2[r].charCodeAt()]++
            while ((r - l + 1) > s1.length) {
                freqS2[s2[l].charCodeAt()]--
                l++
            }
            if (this.isValid(freqS1, freqS2)) {
                return true
            }

            r++
        }

        return false
    }

    isValid(freqS1, freqS2) {
        for (let i = 0; i <= 123; i++) {
            if (freqS1[i] !== freqS2[i]) {
                return false
            }
        }
        return true
    }
}

// a - z -> 97 - 123



