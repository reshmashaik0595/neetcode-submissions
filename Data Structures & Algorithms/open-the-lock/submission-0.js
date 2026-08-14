class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        let notAllowed = new Set(deadends)

        if (notAllowed.has('0000')) {
            return -1
        }

        let queue = [['0000', 0]]
        let front = 0

        notAllowed.add('0000')

        while (front < queue.length) {
            let [curr, level] = queue[front]
            front++

            for (let j = 0; j < 4; j++) {

                // Turn UP
                let digits = curr.split('')
                digits[j] = (Number(digits[j]) + 1) % 10
                let next = digits.join('')

                if (!notAllowed.has(next)) {

                    if (next === target) {
                        return level + 1
                    }

                    notAllowed.add(next)
                    queue.push([next, level + 1])
                }

                // Turn DOWN
                digits = curr.split('')
                digits[j] = (Number(digits[j]) + 9) % 10
                next = digits.join('')

                if (!notAllowed.has(next)) {

                    if (next === target) {
                        return level + 1
                    }

                    notAllowed.add(next)
                    queue.push([next, level + 1])
                }
            }
        }

        return -1
    }
}