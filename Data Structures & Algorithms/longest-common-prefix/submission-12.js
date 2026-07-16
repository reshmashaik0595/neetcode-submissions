class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let left = 0
        while (left < strs[0].length) {
            let pf = strs[0].substring(0, left + 1)
            for (let i = 1; i < strs.length; i++) {
                if (!strs[i].startsWith(pf)) {
                    return strs[0].substring(0, left)
                }
            }
            left++
        }
        return strs[0]
    }
}
