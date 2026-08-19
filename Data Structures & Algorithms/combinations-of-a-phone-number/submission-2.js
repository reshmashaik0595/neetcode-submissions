class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length == 0) return []
        let charMap = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }

        function solve(idx, str) {
            if (idx >= digits.length) {
                result.push(str)
                return
            }

            let curr = digits[idx]
            let char = charMap[curr]
            for (let i = 0; i < char.length; i++) {
                solve(idx + 1, str + char[i])
            }
        }

        let result = []
        solve(0, '')
        return result
    }
}
