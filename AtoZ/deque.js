class Deque {
    constructor() {
        this.arr = [];
        this.head = 0;
        this.tail = 0;
    }
    push_front(item) {
        if (this.arr[0]) {
            for (let i = this.arr.length; i > 0; i--) {
                this.arr[i] = this.arr[i - 1];
            }
        }
        this.arr[this.head] = item;
        this.tail++;
    }
    push_back(item) {
        this.arr[this.tail++] = item;
    }
    pop_front() {
        if (this.head >= this.tail) {
            return null;
        } else {
            return this.arr[this.head++];
        }
    }
    pop_back() {
        if (this.head >= this.tail) {
            return null;
        } else {
            return this.arr[--this.tail];
        }
    }
}
