class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        if (bills[0] > 5)
            return false

        let five = 0
        let ten = 0
        let twenty = 0
        five++
        for (let i = 1; i < bills.length; i++) {
            if (bills[i] == 5) {
                five++
            } else if (bills[i] == 10) {
                ten++
                if (five == 0) {
                    return false
                }
                five--
            } else {
                twenty++
                if (five >= 3) {
                    five = five - 3
                    continue
                } else if (five >= 1 && ten >= 1) {
                    five = five - 1
                    ten = ten - 1
                    continue
                }
                return false
            }
        }
        return true
    }
}
