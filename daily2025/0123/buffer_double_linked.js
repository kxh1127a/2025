class LinkedList {
    constructor (value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class Buffer {
    constructor (id) {
        this.id = id;
        this.storage = [];
    }
    push(item) {
        this.storage.push(item);
    }
    linkNodes() {
        for (let i=0; i<this.storage.length; i++) {
            this.storage[i].next = this.storage[i+1];
            this.storage[i].prev = this.storage[i-1];
        }
    }
}

const values = ["ZARD", "CDR", "LOVE"];
const buffer = new Buffer('buffer');

values.forEach(value=>{
    buffer.push(new LinkedList(value));
})

buffer.linkNodes();
console.log(buffer.storage);