class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        let idxMap = new Map()
        for (let i = 0; i < order.length; i++) {
            idxMap.set(order[i], i)
        }
        for (let i = 0; i < words.length - 1; i++) {
            let word1 = words[i]
            let word2 = words[i + 1]
            for (let ch = 0; ch < word1.length; ch++) {
                if (ch == word2.length) return false
                let word1Idx = idxMap.get(word1[ch])
                let word2Idx = idxMap.get(word2[ch])
                if (word1Idx > word2Idx) return false
                else if (word1Idx < word2Idx) break;
            }
        }
        return true
    }
}
