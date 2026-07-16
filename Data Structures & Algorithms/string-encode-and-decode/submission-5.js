class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let decodeStr = ''
        for (let i = 0; i < strs.length; i++) {
            let len = strs[i].length
            decodeStr = decodeStr + len + '#' + strs[i]
        }
        return decodeStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let l = 0
        let ans = []
        while (l < str.length) {
            let len = ''
            while (str[l] !== '#') {
                len = len + str[l]
                l++
            }
            len = Number(len)
            let st = l + 1
            let en = st + len
            let word = str.substring(st, en)
            ans.push(word)
            l = en
        }
        return ans
    }
}

