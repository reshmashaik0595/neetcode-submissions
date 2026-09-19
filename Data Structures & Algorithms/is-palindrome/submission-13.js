class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = ''
        for (let i = 0; i < s.length; i++) {
            let ch = s[i].toLowerCase()
            if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')) {
                str = str + ch
            }
        }
        console.log(str)
        let i = 0
        let j = str.length - 1
        while (i <= j) {
            if (str[i] !== str[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
}
