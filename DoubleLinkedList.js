class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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
    this.head.prev = newHead;
    this.head = newHead;

    this.length++;

    return this.printList();
  }

  addToTail(value) {
    const newTail = new Node(value);

    newTail.prev = this.tail;
    this.tail.next = newTail;
    this.tail = newTail;

    this.length++;

    return this.printList();
  }

  insert(index, value) {
    if (index > this.length - 1) {
      return this.addToTail(value);
    } else if (index === 0) {
      return this.addToHeader(value);
    }

    const newNode = new Node(value);
    const prevElem = this.getElemByIndex(index - 1);
    const nextElem = prevElem.next;

    prevElem.next = newNode;
    newNode.next = nextElem;
    newNode.prev = prevElem;
    nextElem.prev = nextElem;
    this.length++;

    return this.printList();
  }

  remove(index) {
    const prevElem = this.getElemByIndex(index - 1);
    const removedElem = prevElem.next;

    prevElem.next = removedElem.next;
    removedElem.prev = prevElem;

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

myLinkedList.insert(5, 900);
myLinkedList.remove(2);
myLinkedList.remove(3);
myLinkedList.remove(4);

console.log(myLinkedList.printList());
