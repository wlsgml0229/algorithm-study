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
}
