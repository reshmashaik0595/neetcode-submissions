class Solution {
    /**
     * @param {number[]} ratings
     * @return {number}
     */
    candy(ratings) {
        let count = new Array(ratings.length).fill(1)
        // left -> right
        for (let i = 1; i < ratings.length; i++) {
            if (ratings[i] > ratings[i - 1]) {
                count[i] = count[i - 1] + 1
            }
        }
        // right -> left
        for (let i = ratings.length - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) {
                count[i] = Math.max(count[i], count[i + 1] + 1)
            }
        }

        let ans = 0
        for (let i = 0; i < ratings.length; i++) {
            ans = ans + count[i]
        }
        return ans
    }
}


