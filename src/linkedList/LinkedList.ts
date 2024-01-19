class NodeItem {
    value: any;
    next: NodeItem | null;

    constructor(val: any) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    head: NodeItem | null;
    tail: NodeItem | null;
    length: number;

    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (value: any) {
        const newNode = new NodeItem(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
        }
        this.length = this.length + 1;

        return this;
    }
}