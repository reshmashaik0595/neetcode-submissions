class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = new Map()
        for (let i = 0; i < strs.length; i++) {
            let st = strs[i].split('').sort().join('')
            if (!groups.has(st)) {
                groups.set(st, [])
            }
            groups.get(st).push(strs[i])
        }
        return [...groups.values()]
    }
}
