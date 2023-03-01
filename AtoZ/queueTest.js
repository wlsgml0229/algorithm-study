class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    //새로운 값을 받아 노드를 생성
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i += 1) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);
}
