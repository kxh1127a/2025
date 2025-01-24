const values = [
    { id: 'artist', value: "ZARD" },
    { id: 'album', value: "CDR" },
    { id: 'song', value: "LOVE" },
];

class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Buffer {
    constructor() {
        this.storage = [];
    }

    push(item) {
        this.storage.push(item);
    }

    linkNodes() {
        for (let i = 0; i < this.storage.length - 1; i++) {
            this.storage[i].next = this.storage[i + 1];
        }
    }

    findById(id) {
        return this.storage.find(node => node.data.id === id);
    }
}

const buffer = new Buffer();

values.forEach(value => {
    buffer.push(new LinkedList(value));
});

buffer.linkNodes();
console.log(buffer.findById('album').data.value);  