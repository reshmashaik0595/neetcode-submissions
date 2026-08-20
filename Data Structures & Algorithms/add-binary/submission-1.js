class Solution {
    /**
     * @param {string} a
     * @param {string} b
     * @return {string}
     */
    addBinary(a, b) {
        let i = a.length - 1
        let j = b.length - 1
        let carry = 0
        let res = ''
        while (i >= 0 && j >= 0) {
            let sum = Number(a[i]) + Number(b[j]) + carry
            res = res + ((sum % 2 == 0) ? 0 : 1)
            carry = sum > 1 ? 1 : 0
            i--
            j--
        }

        while (i >= 0) {
            let sum = Number(a[i]) + carry
            res = res + ((sum % 2 == 0) ? 0 : 1)
            carry = sum > 1 ? 1 : 0
            i--
        }

        while (j >= 0) {
            let sum = Number(b[j]) + carry
            res = res + ((sum % 2 == 0) ? 0 : 1)
            carry = sum > 1 ? 1 : 0
            j--
        }

        if (carry > 0) {
    res = res + carry
}
        return res.split('').reverse().join('')
    }
}
