"use strict";
class KarnaughMap {
    constructor(id) {
        this.id = id;
        this.arr = [
            [false, false],
            [false, false]
        ];
    }
    event() {
        addEventListener('click', e => {
            const target = e.target;
            const className = target.classList[0];
            // console.log(className)
            const column = Number(className.split('_')[1]);
            const low = Number(className.split('_')[2]);
            // console.log(`column:${typeof column}, low:${low}`)
            if (target.tagName === "DIV") {
                if (target.classList.contains("checked")) {
                    target.classList.remove("checked");
                    this.arr[column][low] = false;
                }
                else {
                    target.classList.add("checked");
                    this.arr[column][low] = true;
                }
            }
            console.log(this.arr);
        });
    }
    running() {
        this.event();
    }
}
const main = (() => {
    const karnaughMap = new KarnaughMap('karnaughMap');
    karnaughMap.running();
})();
