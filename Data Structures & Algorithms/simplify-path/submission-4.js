class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let arr = path.split('/')
        console.log(arr)
        let stack = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '.' || arr[i] == '') {
                continue
            } else if (arr[i] == '..') {
                stack.pop()
            } else {
                stack.push(arr[i])
            }
        }
        let res = stack.join('/')
        return '/' + res
    }
}
