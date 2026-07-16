class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let diffArr = new Array(arr.length)
        for (let i = 0; i < arr.length; i++) {
            diffArr[i] = Math.abs(arr[i] - x)
        }

        let sum = 0
        let min = +Infinity
        let st = 0
        for (let i = 0; i < k; i++) {
            sum = sum + diffArr[i]
        }
        if (sum < min) {
            min = sum
        }
        let s = 1
        let e = k
        while (e < arr.length) {
            sum = sum + diffArr[e] - diffArr[s - 1]
            if (sum < min) {
                min = sum
                st = s
            }
            s++
            e++
        }
        return arr.slice(st, st + k)
    }
}
