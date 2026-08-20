class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        function solve(idx, currSentence) {
            if (idx >= s.length) {
                result.push(currSentence.slice(1).replaceAll(',', ' '))
                return
            }

            for (let i = idx; i < s.length; i++) {
                let str = s.substring(idx, i + 1)
                if (words.has(str)) {
                    solve(i + 1, currSentence + ',' + str)
                }
            }
        }

        let result = []
        let currSentence = ""
        let words = new Set([...wordDict])
        let idx = 0
        solve(idx, currSentence)
        return result
    }
}
