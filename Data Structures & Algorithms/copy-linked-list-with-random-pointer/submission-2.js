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

        let mapNode = new Map()
        let temp = new Node(-1)
        let dummy = temp

        let curr = head
        while (curr !== null) {
            let nn = new Node(curr.val)
            mapNode.set(curr, nn)
            dummy.next = nn
            dummy = dummy.next
            curr = curr.next
        }

        dummy = temp.next
        curr = head
        while (curr !== null) {
            dummy.random = mapNode.get(curr.random)
            dummy = dummy.next
            curr = curr.next
        }

        return temp.next
    }
}
