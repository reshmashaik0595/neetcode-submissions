class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let idxMap = new Map()
        for(let i = 0; i < nums.length;i++){
            if(idxMap.has(nums[i])){
                let idx = idxMap.get(nums[i])
                if(Math.abs(idx-i)<=k){
                    return true
                }
            }
            idxMap.set(nums[i],i)
        }
        return false
    }
}
