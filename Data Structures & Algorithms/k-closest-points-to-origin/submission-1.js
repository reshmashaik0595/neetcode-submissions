class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let ans = points.sort(this.comparator)
        let res = []
        while (res.length < k) {
            res.push(ans.pop())
        }
        return res
    }

    comparator(a, b) {
        let ed_a = Math.sqrt((a[0] - 0) ** 2 + (a[1] - 0) ** 2)
        let ed_b = Math.sqrt((b[0] - 0) ** 2 + (b[1] - 0) ** 2)
        if (ed_a > ed_b) {
            return -1
        } else if (ed_a < ed_b) {
            return 1
        } else {
            return 0
        }
    }
}
