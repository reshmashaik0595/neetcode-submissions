class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let pf = 0
        for(let i = 0; i < prices.length - 1; i++){
            if(prices[i] < prices[i+1]){
                pf = pf + prices[i+1] - prices[i]
            }
        }
        return pf
    }
}
