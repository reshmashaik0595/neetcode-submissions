class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        let notAllowed = new Set(deadends)
        if (notAllowed.has('0000')) return -1
        notAllowed.add('0000')
        let queue = [['0000', 0]]
        let front = 0
        while (front < queue.length) {
            let len = queue.length - front
            for (let j = 0; j < len; j++) {
                let curr = queue[front++]
                let str = curr[0]
                let level = curr[1]
                for (let i = 0; i < 4; i++) {
                    // Move Forward
                    let digits = str.split('')
                    digits[i] = Number(digits[i]) == 9 ? 0 : Number(digits[i]) + 1
                    digits = digits.join('')
                    if (!notAllowed.has(digits)) {
                        queue.push([digits, level + 1])
                        if (digits == target) {
                            return level + 1
                        }
                        notAllowed.add(digits)
                    }

                    // Move Backward
                    digits = str.split('')
                    digits[i] = Number(digits[i]) == 0 ? 9 : Number(digits[i]) - 1
                    digits = digits.join('')
                    if (!notAllowed.has(digits)) {
                        queue.push([digits, level + 1])
                        if (digits == target) {
                            return level + 1
                        }
                        notAllowed.add(digits)
                    }
                }
            }
        }

        return -1
    }
}
