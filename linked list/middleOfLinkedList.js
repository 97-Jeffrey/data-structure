// the fast node is twice as fast as slow one, When the fast node reaches the end of list, the slow node is in middle;

function middleNode(head){
  let fast = head;
  let slow = head;

  while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}