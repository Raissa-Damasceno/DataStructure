class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  addToHeader(value) {
    const newHead = new Node(value);

    newHead.next = this.head;
    this.head = newHead;

    this.length++;

    return this.printList();
  } //O(1)

  addToTail(value) {
    const newTail = new Node(value);

    this.tail.next = newTail;
    this.tail = newTail;

    this.length++;

    return this.printList();
  } //0(1)

  insert(index, value) {
    const newNode = new Node(value);

    if (index > this.length - 1) {
      this.addToTail(value);
    } else if (index === 0) {
      this.addToHeader(value);
    } else {
      const prevElem = this.getElemByIndex(index - 1);
      const nextElem = prevElem.next;

      prevElem.next = newNode;
      newNode.next = nextElem;
      this.length++;
    }

    return this.printList();
  }

  remove(index) {
    const prevElem = this.getElemByIndex(index - 1);
    const removedElem = prevElem.next;

    prevElem.next = removedElem.next;

    this.length--;

    return this.printList();
  }

  getElemByIndex(index) {
    // check if index is a valid param
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  reverse() {
    // let counter = 0;

    // while (counter <= this.length - 1) {
    //   let currentNode = this.head;
    //   this.addToTail(currentNode);
    //   currentNode.next = null;
    //   this.tail.next = currentNode;
    //   this.remove(0)

    //   counter++;
    // }

    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;

      second.next = first;
      first = second;
      second = temp;
    }
  }

  printList() {
    let currentNode = this.head;
    let listOfValues = [];

    while (currentNode !== null) {
      listOfValues.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return listOfValues;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.addToHeader(20);
myLinkedList.addToHeader(30);
myLinkedList.addToHeader(40);

myLinkedList.addToTail(50);
myLinkedList.addToTail(60);
myLinkedList.addToTail(70);
myLinkedList.addToTail(80);

myLinkedList.insert(3, 90);

myLinkedList.remove(5);
myLinkedList.remove(5);

myLinkedList.reverse();
console.log(myLinkedList.printList());
//console.log(myLinkedList.length);
