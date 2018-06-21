'use strict';

class _Node {
  constructor(value,next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;    
  }

  insertFirst(item){
    this.head = new _Node(item,this.head);
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode.next;
      }
      tempNode.next = new _Node(item,null);
    }
  }

  insertBefore(before,item) {
    let previousNode = this.head;
    let currNode = this.head;
    //keep track of previous
    
   
    while ((currNode !== null) && (currNode.value !== before)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = new _Node(item,currNode);
    
  }

  insertAfter(afterValue,item) {
    let currNode = this.head;
    let nodeAfter = this.head;
    while(currNode !== null && currNode.value !== afterValue){
      nodeAfter  = currNode.next;//
      currNode = nodeAfter;//
    }
    nodeAfter.next = new _Node(item,currNode.next);
  }

  insertAt(position,item) {
    let currNode = this.head;
    let prevNode = this.head;
    let currentPosition = 0;

    while(currNode !== null && currentPosition !== position){
      currentPosition++;
      prevNode = currNode;
      currNode = prevNode.next;         
    }
    prevNode.next = new _Node(item,currNode.next);
  }

  find(item){
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while(currNode.value !== item) {
      if(currNode.value !== null){
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
 
  remove(item){ 
    //if the list is empty
    if (!this.head){
      return null;
    }
    //if the node to be removed is head, make the next node head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;
   
    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}
let display = (list) => {
  let currentNode = list.head;
  while(currentNode !== null){

    console.log(currentNode);
    currentNode = currentNode.next;
  }
};

let size = (list) => {
  let currentNode = list.head;
  let count = 0;
  while(currentNode !== null){
    count +=1;
    currentNode = currentNode.next;
  }
  console.log(count);
};

let isEmpty = list => (list.head === null) ?  true : false;

let findPrevious = (nodeToFind,list) => {
  let currentNode = list.head;
  let prevNode = list.head;

  while(currentNode !== null && currentNode.value !== nodeToFind){
    prevNode = currentNode;
    currentNode = prevNode.next;  
  }
  return prevNode;
};

let findLast = (list) => {
  let currentNode = list.head;
  while(currentNode.next !== null){
    currentNode = currentNode.next;
  }
  return currentNode;
}; 

let reverseList = (list) => {

  let newList = new LinkedList();
  let currentNode = list.head;
  let prevNode = list.head;
  
  while (currentNode !== null){
    newList.insertFirst(currentNode.value);
    prevNode = currentNode;
    currentNode = currentNode.next;
    
  }
  return newList;

};

let thirdFromTheEnd = (list) => {
  let nodeThird = list.head;
  let prevNode = list.head;
  let currentNode = list.head;
 
  while (currentNode.next !== null){
    nodeThird = prevNode;
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  return nodeThird;

};



let main = () => {
  let SLL = new LinkedList();
  let newSLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Tauhida');
  // SLL.remove('squirrel');
  SLL.insertBefore('Husker','Athena');
  SLL.insertAfter('Athena','Hotdog');
  SLL.insertAt(3,'Kat');
  // SLL.remove('Tauhida');
  //display(SLL);
  //size(SLL);
  //console.log(isEmpty(SLL));
  //console.log(isEmpty(newSLL));
  //console.log("previous node is:",prevNode('Hotdog',SLL));
  //console.log(findLast(SLL));
  //console.log(reverseList(SLL));
  console.log(thirdFromTheEnd(SLL));
  return SLL;
};

main();


// ---------------------------------------------------Mystery Program
// It is trying to find the end of the list given
// O(n)

// function WhatDoesThisProgramDo(lst){
//   let current = lst.head;
//   while(current !== null){
//     let newNode = current;
//     while (newNode.next !== null) {
//       if (newNode.next.value === current.value) {
//         newNode.next = newNode.next.next;
//       }
//       else{
//         newNode = newNode.next;
//       }
//     }
//     current = current.next;
//   }
// }


// linear algorithm to reverse list;

// old list a=> b=> c=> d;

// new list a <=b <=c <=d
//or
// new list d=> c=>b=>a;







