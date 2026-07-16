class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ans = new Map()
        for (let i = 0; i < strs.length; i++) {
            let key = strs[i].split('').sort().join('')
            if (!ans.has(key)) {
                ans.set(key, [])
            }
            ans.get(key).push(strs[i])
        }

        let res = []
        for (let val of ans.values()) {
            res.push(val)
        }
        return res
    }
}
