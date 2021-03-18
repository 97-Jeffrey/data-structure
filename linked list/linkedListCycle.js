// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// we use two pointer method see if fast and slow can catch each other, if they can, the linked list is cyclable in some positions.

function hasCycle(head){

  if(!head) return false;

  let slow = head;
  let fast = head.next;

  while(slow !==fast){
    if(!fast || !fast.next){
      return false
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true

}