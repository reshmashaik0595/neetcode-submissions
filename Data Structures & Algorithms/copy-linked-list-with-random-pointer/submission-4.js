// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let tmp = new Node(-1)
        let dummmy = tmp
        let curr = head
        let map = new Map
        while (curr !== null) {
            let nn = new Node(curr.val)
            map.set(curr, nn)
            dummmy.next = nn
            dummmy = dummmy.next
            curr = curr.next
        }
        dummmy = tmp.next
        curr = head
        while (curr !== null) {
            dummmy.random = map.get(curr.random)
            dummmy = dummmy.next
            curr = curr.next
        }
        return tmp.next
    }
}
