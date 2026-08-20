class Solution {
    /**
     * @param {number[]} ratings
     * @return {number}
     */
    candy(ratings) {
        let ltr = new Array(ratings.length).fill(1)
        let rtl = new Array(ratings.length).fill(1)
        // left -> right
        for (let i = 1; i < ratings.length; i++) {
            if (ratings[i] > ratings[i - 1]) {
                ltr[i] = ltr[i - 1] + 1
            }
        }
        // right -> left
        for (let i = ratings.length - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                rtl[i] = rtl[i + 1] + 1
            }
        }

        let ans = []
        for (let i = 0; i < ratings.length; i++) {
            ans.push(Math.max(ltr[i], rtl[i]))
        }
        return ans.reduce((ele, acc) => (ele + acc), 0)
    }
}


