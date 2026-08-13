class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        let dict = new Map()
        for (let i = 0; i < order.length; i++) {
            dict.set(order[i], i)
        }

        for (let i = 0; i < words.length - 1; i++) {
            let word1 = words[i]
            let word2 = words[i + 1]
            for (let j = 0; j < word1.length; j++) {
                if (j == word2.length) return false
                if (word1[j] !== word2[j]) {
                    if (dict.get(word1[j]) > dict.get(word2[j])) {
                        return false
                    }
                    break
                }
            }
        }
        return true
    }
}
