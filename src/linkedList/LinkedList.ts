class Node {
  value: any;
  next: Node | null;

  constructor(val: any) {
    this.value = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: any) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      if (this.tail !== null) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length = this.length - 1;

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const currentHead = this.head;

    this.head = this.head.next;
    this.length--;

    // if list is empty we also to update tail
    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }
}
