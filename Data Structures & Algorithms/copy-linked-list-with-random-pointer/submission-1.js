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
        let mapNodes = new Map()
        let newHead = new Node(-1)
        let dummy = newHead
        let temp = head

        while (temp !== null) {
            let nn = new Node(temp.val)
            mapNodes.set(temp, nn)
            dummy.next = nn

            dummy = dummy.next
            temp = temp.next
        }

        temp = head
        dummy = newHead.next
        while (dummy !== null) {
            let val = temp.random
            dummy.random = mapNodes.get(val)
            dummy = dummy.next
            temp = temp.next
        }
        return newHead.next
    }
}
