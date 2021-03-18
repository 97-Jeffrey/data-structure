// This algorithm has linear time complexity
// and has big O of 1, since I didn't create new linked list

function reverseList(){
  let prev = null;
  let next = null;

  while(head!==null){
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}