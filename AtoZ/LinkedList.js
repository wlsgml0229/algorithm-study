class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let curNode = this.head;
    while (curNode.value !== value) {
      curNode = curNode.next;
    }
    return curNode;
  }

  apeend(newValue) {
    const newNode = new Node(newValue);
    //연결리스트가 비어 있다면 head, tail 모두 할당
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      // 현재마지막에있었던 노드의 next에 newNode값 할당
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let curNode = this.head;
    let displayString = "[";
    while (curNode !== null) {
      displayString += `${curNode.value},`;
      curNode = curNode.next;
    }
    displayString = displayString.substring(0, displayString.length - 1);
    displayString += "]";
    console.log(displayString);
  }
}

const linkedList = new SingleyLinkedList();
linkedList.apeend(1);
linkedList.apeend(2);
linkedList.insert(linkedList.find(2), 10);
linkedList.apeend(3);
linkedList.display();
