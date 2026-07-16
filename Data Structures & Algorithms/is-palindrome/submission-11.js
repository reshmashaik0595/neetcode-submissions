class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = ''
        for (let i = 0; i < s.length; i++) {
            if ((s[i].toLowerCase() >= 'a' && s[i].toLowerCase() <= 'z') || (s[i] >= '0' && s[i] <= '9')) {
                str = str + s[i]
            }
        }
        let i = 0
        let j = str.length - 1
        while (i <= j) {
            if (str[i].toLowerCase() !== str[j].toLowerCase()) return false
            i++
            j--
        }
        return true
    }
}
