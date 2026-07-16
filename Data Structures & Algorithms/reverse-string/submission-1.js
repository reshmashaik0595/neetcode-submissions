class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let i = 0
        let j = s.length - 1
        while (i <= j) {
            let temp = s[i]
            s[i] = s[j]
            s[j] = temp
            i++
            j--
        }
        return s
    }
}
