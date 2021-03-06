// we re-constructed the linked list,by chaining all the odd followed by even, the odd and even are updated by .next;


function oddEvenList(head) {
  if(head == null) return null;
  
  let odd = head;
  let even = odd.next;
  let evenHead = even;
  
  while(even !== null && even.next !==null){
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even =even.next;
  }
  odd.next = evenHead;
  return head;
};