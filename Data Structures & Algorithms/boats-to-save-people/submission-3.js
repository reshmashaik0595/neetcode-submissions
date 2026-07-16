class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people = people.sort((a, b) => a - b)
        let i = 0
        let j = people.length - 1
        let ans = 0
        while (i <= j) {
            let sum = people[i] + people[j]
            if (sum == limit) {
                ans++
                i++
                j--
            } else if (sum > limit) {
                ans++
                j--
            } else {
                ans++
                i++
                j--
            }

        }
        return ans
    }
}


// 1 2 4 5 
