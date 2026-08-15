class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        function solve(words, order) {
            let wordDict = new Map()
            for (let i = 0; i < order.length; i++) {
                wordDict.set(order[i], i)
            }
            for (let i = 0; i < words.length - 1; i++) {
                let word1 = words[i]
                let word2 = words[i + 1]
                for (let j = 0; j < word1.length; j++) {
                    if (j == word2.length) return false
                    let word1Idx = wordDict.get(word1[j])
                    let word2Idx = wordDict.get(word2[j])
                    if (word1Idx > word2Idx) return false
                    else if (word1Idx < word2Idx) break
                }
            }
            return true
        }
        return solve(words, order)
    }
}
