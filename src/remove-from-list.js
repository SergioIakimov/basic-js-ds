const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  /*let dummy = new ListNode(-1);
  dummy.next=l;
  let prev = dummy;
  let cur = l;

  while(cur){
    if(cur.value === k){
      prev.next = cur.next;
      cur = cur.next;
    }else{
      prev=cur;
      cur = cur.next;
    }
  }
  return dummy.next; */

  if(l == null){ 
    return l; 
  } 
  while(l.value == k){ 
    l = l.next; 
  } 
  thisNode = l; 
  nextNode = thisNode.next; 
  while(nextNode != null){ 
    if(nextNode.value == k){ 
      thisNode.next = nextNode.next; // No more nodes, ie last node was to be removed 
      if(thisNode.next == null) ;
       break;
    } 
    thisNode = thisNode.next; 
    nextNode = thisNode.next; 
  } 
  return l;


  /*var head = l;

    while (head.value === k){
        head = head.next;
    }

    var node = head;
    var temp = null;

    while (node && node.next != null) {
        if (node.next.value === k){
            temp = node.next.next;
            node.next.next = null;
            node.next = temp;
        }
        node = node.next; 
        return l;   
    }*/

     

}


 /* class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  } */

    //function indexOf(k) {
    /*  let current = l.head;
      let indexArray = [];
      let index = 0;
  
      while (current) {
        if (current.x === k) {
          indexArray.push(index);
          //return index;
        }
  
        current = current.next;
        index1++;
      }
  
     // return indexArray.length <= 0 ? -1: indexArray; //no need in return
  //  }

    //function removeAt(arr) { //position
      
      if (arr.length === 0) {
        return l;
      }
      for(let i = 0; i<arr.length; i++) {
        if (arr[i] <0 || arr[i] >= l.length) {
          return l;
        }else{
  
          let current = l.head;
  
          if (arr[i] === 0) {
          l.head = current.next;
          } else {
            let prev = null;
            let index = 0;
  
           while (index < arr[i]) {
              prev = current;
              current = current.next;
              index++;
           }
  
           prev.next = current.next;
        }
      //}
      l.length--;
      //return current.value;
    

      return l;
      //return l.removeAt(l.indexOf(k));
    
    }
  }
}  */


  //}
//--------------EndClass---------------//
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


module.exports = {
  removeKFromList
};
