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
        let nHead = new Node(-1)
        let temp = nHead
        let curr = head

        let nodeMap = new Map()
        while (curr !== null) {
            let nNode = new Node(curr.val)
            nodeMap.set(curr, nNode)
            temp.next = nNode
            temp = temp.next
            curr = curr.next
        }
        temp = nHead.next
        curr = head
        while(curr !== null){
            let rNode = curr.random
            temp.random = nodeMap.get(rNode)

            temp = temp.next
            curr = curr.next
        }

        return nHead.next
    }
}
