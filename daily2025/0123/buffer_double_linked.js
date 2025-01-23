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
            //console.log(this.storage[i]);
            //LinkedList { value: 'ZARD', prev: null, next: null }
            this.storage[i].next = this.storage[i+1];
            this.storage[i].prev = this.storage[i-1];

            // console.log(this.storage[i].next);
            // LinkedList { value: 'CDR', prev: null, next: null }
            // LinkedList { value: 'LOVE', prev: null, next: null }
            // undefined

            // console.log(this.storage[i].prev);
            // undefined
            // LinkedList { value: 'ZARD', prev: undefined, next: null }
            // LinkedList { value: 'CDR',
            //              prev: LinkedList { value: 'ZARD', prev: undefined, next: null },
            //              next: null
            //              }
        }
        // console.log(this.storage)
    }
}


const values = ["ZARD", "CDR", "LOVE"];
const buffer = new Buffer('buffer');

values.forEach(value=>{
    buffer.push(new LinkedList(value));
})

buffer.linkNodes();
console.log(buffer.storage);