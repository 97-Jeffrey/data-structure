// we set slow as the middle point of the linked list, we reverse it, then compare it with complete(fast) linked list for values

function isPalidrome(head){

  let fast = head;
  let slow = head;

  while(fast && fast.next){
    fast = fast.next.next;
    slow = slow.next;
  }
  fast = head;
  slow = reverse(slow);

  while(show !== null){
    if(slow.val !== fast.val){
      return false
    }
    slow = slow.next;
    fast = fast.next;
  }

  return true;

}


let reverseList = function(head){

  let prev = null;
  let next = null;

  while(head !==null){
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}