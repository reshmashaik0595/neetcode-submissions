class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(str) {
        let s = 0
        let e = str.length - 1
        while (s <= e) {
            if (str[s] !== str[e]) {
                return this.isValid(s, e - 1, str) || this.isValid(s + 1, e, str)
            }
            s++
            e--
        }
        return true
    }

    isValid(s, e, str) {
        while (s <= e) {
            if (str[s] !== str[e]) {
                return false
            }
            s++
            e--
        }
        return true
    }
}
