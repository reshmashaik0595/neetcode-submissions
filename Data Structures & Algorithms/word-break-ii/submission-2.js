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
                let nextSentence = currSentence
                if (words.has(str)) {
                    // if (idx > 0) {
                    //     nextSentence = nextSentence + " "
                    // }
                    solve(i + 1, nextSentence + ',' + str)
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
