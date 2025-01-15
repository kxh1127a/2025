class Node {
    constructor(value) {
        this.value = value;
        this.prev = null; // 이전 노드
        this.next = null; // 다음 노드
    }
}

class Deque {
    constructor(id) {
        this.id = id;
        this.head = null; // 리스트의 시작 (front)
        this.tail = null; // 리스트의 끝 (rear)
        this.size = 0;    // 현재 Deque의 크기
    }

    // 맨 뒤에 항목 추가 (push)
    push(item) {
        const newNode = new Node(item);
        if (!this.tail) { // Deque가 비어 있을 경우
            this.head = this.tail = newNode;
        } else { // 기존 tail에 연결
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    // 맨 뒤에서 항목 제거 (pop)
    pop() {
        if (!this.tail) return null; // 비어 있는 경우
        const value = this.tail.value;
        if (this.head === this.tail) { // 노드가 하나만 있는 경우
            this.head = this.tail = null;
        } else { // 마지막 노드를 제거
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return value;
    }

    // 맨 앞에 항목 추가 (unshift)
    unshift(item) {
        const newNode = new Node(item);
        if (!this.head) { // Deque가 비어 있을 경우
            this.head = this.tail = newNode;
        } else { // 기존 head에 연결
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    // 맨 앞에서 항목 제거 (shift)
    shift() {
        if (!this.head) return null; // 비어 있는 경우
        const value = this.head.value;
        if (this.head === this.tail) { // 노드가 하나만 있는 경우
            this.head = this.tail = null;
        } else { // 첫 번째 노드를 제거
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return value;
    }

    // Deque의 크기를 반환
    getSize() {
        return this.size;
    }

    // Deque를 배열로 변환해 출력 (디버깅용)
    toArray() {
        const result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
}

// 사용 예시
const deque = new Deque('example');
deque.push(1);
deque.push(2);
deque.unshift(0);
console.log(deque.toArray()); // [0, 1, 2]
console.log(deque.pop()); // 2
console.log(deque.shift()); // 0
console.log(deque.toArray()); // [1]
console.log(`Deque 크기: ${deque.getSize()}`); // Deque 크기: 1
