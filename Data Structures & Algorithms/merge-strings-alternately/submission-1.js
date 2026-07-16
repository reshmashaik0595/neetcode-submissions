class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let str = ''
        let i = 0
        let j = 0
        while (i < word1.length && j < word2.length) {
            str = str + word1[i] + word2[j]
            i++
            j++
        }
        while (i < word1.length) {
            str = str + word1[i]
            i++
        }
        while (j < word2.length) {
            str = str + word2[j]
            j++
        }

        return str
    }
}
