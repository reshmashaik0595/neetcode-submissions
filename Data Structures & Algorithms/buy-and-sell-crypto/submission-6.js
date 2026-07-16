class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let minSoFar = prices[0]
        for (let i = 1; i < prices.length; i++) {
            if(prices[i] < minSoFar){
                minSoFar = prices[i]
            }else{
                let curr = prices[i] - minSoFar
                profit = Math.max(curr,profit)
            }
        }
        return profit
    }
}
