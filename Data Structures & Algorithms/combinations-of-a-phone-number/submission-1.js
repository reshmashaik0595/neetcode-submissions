class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length == 0) return []
        let digitCharMap = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }

        function solve(idx, curr) {
            if(idx >= digits.length){
                ans.push(curr)
                return
            }
            let digit = digits[idx]
            let chars = digitCharMap[digit]
            for (let i = 0; i < chars.length; i++) {
                solve(idx + 1, curr + chars[i])
            }
        }

        let ans = []
        solve(0, '')
        return ans
    }
}
