'use strict';

// I have a lot of my personal code at the bottom 


class _Node {
  constructor(value, next, prev) {
    this.value=value,
    this.next=next,
    this.prev = prev;
  }
}

class DLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item){
    let newNode = new _Node(item, this.head, null);
    if(this.head !== null ){
      this.head.prev = newNode;
    } 
    this.head = newNode;
    if(this.tail === null){ 
      this.tail = newNode;
    }
  }

  insertLast(item){
    let newNode = new _Node(item, null, this.tail);
    if(this.tail !== null){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(this.head === null ){
      this.head = newNode;
    } 
  } 
  
  //------------------------See below---------------------------------------------------------
  
  insertBefore(item,beforeValue){
    let previousNode = this.head;
    let currNode = this.head;
    
    while ((currNode !== null) && (currNode.value !== beforeValue)) {
    
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    
    previousNode.next = new _Node(item,previousNode,currNode);
    currNode.prev = previousNode.next;
  }

  insertAfter(item,AfterValue){

    let currentNode = this.head;
    let nodeAfterCurrent = this.head;
    if(currentNode.value === AfterValue){
      nodeAfterCurrent = currentNode.next;
    }
    console.log('hi');
    while ((currentNode !== null) && (currentNode.value !== AfterValue)) {
      currentNode = currentNode.next;
      console.log('currentNode',currentNode);
      nodeAfterCurrent = currentNode.next;
      console.log('currentNode:',currentNode);
    }
    if(currentNode === null){
      console.log('Item not found');
      return;
    }
    nodeAfterCurrent.prev = currentNode.next; 
    currentNode.next = new _Node(item,currentNode,currentNode.next);
    
  }

  
  insertAt(position,item) {
    let currNode = this.head;
    let nextNode = this.head;
    let currentPosition = 1;

    while(currNode !== null && currentPosition !== position){
      currentPosition++;
      console.log(currNode,nextNode);
      currNode = currNode.next;
      nextNode = currNode;         
    }


    currNode.next = new _Node(item,currNode.next);
    //currNode.prev = prevNode.next.next;
  }
  

//-------------------------See Above-----------------------------------------------------------

  remove(item){
    if (!this.head){
      return null;
    }
    let current = this.head;
    while(current.value !== item){
      current = current.next;
      if(current === null){
        console.log('Item to remove is not on the list');
        return null;
      }   
    }
    //found it - now remove it

    //if the node to be removed is head, make the next node head
    if(current === this.head){
      this.head = current.next;
      //return;
    } else{
      current.prev.next = current.next;
    }
         
    //delete last node
    if(current === this.tail){
      this.tail = current.prev;
    } else{
      current.next.prev = current.prev;
    }
  }
}  


function displayList(list){
  let currNode = list.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(lst){
  let counter = 0;
  let currNode = lst.head;
  if(!currNode){
    return counter;
  }
  else
    counter++;
  while (!(currNode.next == null)) {
    counter++;
    currNode = currNode.next;
  }
  return counter;
}

function reverseDLL(lst) {
  let currNode = lst.head;
  let tempNode = null;
  
  while (currNode !== null) {
    //swapping nodes
    tempNode = currNode.next;
    currNode.next = currNode.prev;
    currNode.prev = tempNode;

    currNode = tempNode;
  }
  tempNode = lst.head;
  lst.head = lst.tail;
  lst.tail = tempNode;
}
      
function main(){
      
  let dll = new DLinkedList();
  dll.insertFirst('Aquaria');
  //add the following items in your doubly linked list. 
  //`Aquaria, Caprica, Gemenon, Picon, Sagittaron`
  dll.insertLast('Caprica');
  dll.insertAt('hello',2);
  dll.insertLast('Gemenon');
  dll.insertLast('Picon');
  dll.insertLast('Sagittaron');

  //console.log(dll);

  //* Add `Tauron` to the list
  //* Remove `Picon` from the list

  //dll.remove('Picon');
  //console.log(size(dll));
  console.log(dll);
  //reverseDLL(dll);
  console.log(dll);
      
}
main();
      




// class _Node {
//   constructor(value, next, prev) {
//     this.value=value,
//     this.next=next,
//     this.prev = prev;
//   }
// }

// class DLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   insertFirst(item){
//     let newNode = new _Node(item, this.head, null);
//     if(this.head !== null ){
//       this.head.prev = newNode;
//     } 
//     this.head = newNode;
//     if(this.tail === null){ 
//       this.tail = newNode;
//     }
//   }
//   insertLast(item){
//     let newNode = new _Node(item, null, this.tail);
//     if(this.tail !== null){
//       this.tail.next = newNode;
//     }
//     this.tail = newNode;
//     if(this.head === null ){
//       this.head = newNode;
//     } 
//   } 





//   insertAfter(item,AfterValue){

//     let currentNode = this.head;
//     let nodeAfterCurrent = this.head;
//     if(currentNode.value === AfterValue){
//       nodeAfterCurrent = currentNode.next;
//     }
//     console.log('hi');
//     while ((currentNode !== null) && (currentNode.value !== AfterValue)) {
//       currentNode = currentNode.next;
//       console.log('currentNode',currentNode);
//       nodeAfterCurrent = currentNode.next;
//       console.log('currentNode:',currentNode);
//     }
//     if(currentNode === null){
//       console.log('Item not found');
//       return;
//     }
//     nodeAfterCurrent.prev = currentNode.next; 
//     currentNode.next = new _Node(item,currentNode,currentNode.next);
    
//   }
 
//  // a => new <=b


//   insertAt(position,item) {
//     let currNode = this.head;
//     let prevNode = this.head;
//     let currentPosition = 0;

//     while(currNode !== null && currentPosition !== position){
//       currentPosition++;
//       prevNode = currNode;
//       currNode = prevNode.next;         
//     }


//     prevNode.next = new _Node(item,currNode.next);
//     //currNode.prev = prevNode.next.next;
//   }

// }
// let display = (list) => {
//   let currentNode = list.head;
//   while(currentNode !== null){

//     console.log('current:',currentNode);
//     currentNode = currentNode.next;
//   }
// };







// let newList = new DLinkedList();
// newList.insertFirst(3);
// newList.insertFirst(2);
// newList.insertFirst(1);
// console.log('First:',newList);

// display(newList);
// newList.insertAfter(7,2);
// console.log('afterInsert',newList);
// display(newList);
