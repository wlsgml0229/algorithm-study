class Queue {
    //front, rear 무한정 커질수 있음
    //front, rear 나타낼 인덱스 변수 선언
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear ++] = value;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    //가장앞의값을 반환 (프론트의값)
    peek() {
        return this.queue[this.front]
    }

    size() {
        return this.rear - this.front;
    }

}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue()); //1
queue.enqueue(8);
console.log(queue.size()); //3
console.log(queue.peek()); //2
console.log(queue.dequeue()); //2
console.log(queue.dequeue()); //4

//!!Shift 함수는 쓰지말것
const arr = [1,2,3];
arr.push(4);
const value = queue.shift(); // O(n) 선형시간발생
console.log(value); // 1