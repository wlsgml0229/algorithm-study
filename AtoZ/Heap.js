class MaxHeap {
  constructor() {
    //0번인덱스 null로 설정하여 비워두고 계산을 좀 더 간결하게
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIdx = this.heap.length - 1;
    // 부모 인덱스 = 현재 인덱스 / 2 (이진트리)
    let parentIdx = Math.floor(currentIdx / 2);

    //루트가 아니면서 들어온값과 부모값의 비교하여 값변경 진행 후 인덱스 정리
    while (parentIdx !== 0 && this.heap[parentIdx] < value) {
      const temp = this.heap[parentIdx];
      this.heap[parentIdx] = value;
      this.heap[currentIdx] = temp;

      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    while (
      this.heap[currentIdx] < this.heap[leftIdx] ||
      this.heap[currentIdx < this.heap[rightIdx]]
    ) {
      if (this.heap[leftIdx] < this.heap[rightIdx]) {
        const temp = this.heap[currentIdx];
        this.heap[currentIdx] = this.heap[rightIdx];
        this.heap[rightIdx] = temp;
        currentIdx = rightIdx;
      } else {
        const temp = this.heap[currentIdx];
        this.heap[currentIdx] = this.heap[leftIdx];
        this.heap[leftIdx] = temp;
        currentIdx = leftIdx;
      }
      leftIdx = currentIdx * 2;
      //오른쪽 하나추가
      rightIdx = currentIdx * 2 + 1;
    }

    return returnValue;
  }
}
