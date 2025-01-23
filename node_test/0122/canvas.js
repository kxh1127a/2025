"use strict";
class MemoryInfo {
    constructor(id) {
        this.id = id;
        this.canvas = null;
        this.pen = null;
    }
    settings() {
        this.canvas = this.$("canvas");
        this.pen = this.canvas.getContext("2d");
    }
    $(elementName) {
        return document.querySelector(elementName);
    }
    run() {
        this.settings();
    }
}
const mainFunc = (() => {
    const memoryInfo = new MemoryInfo("memoryInfo");
    memoryInfo.run();
})();
