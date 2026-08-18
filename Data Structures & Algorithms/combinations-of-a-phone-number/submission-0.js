class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return []
        let numCharMap = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }

        function solve(digits, idx, curr) {
            if (idx >= digits.length) {
                ans.push(curr)
                return
            }
            let digit = digits[idx]
            let chars = numCharMap[digit]
            for (let i = 0; i < chars.length; i++) {
                solve(digits, idx + 1, curr + chars[i])
            }
        }
        let ans = []
        solve(digits, 0, '')
        return ans
    }
}
