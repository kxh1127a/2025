"use strict";
class TriangleWeight {
    constructor(id) {
        this.id = id;
        this.canvas = null;
        this.pen = null;
        this.scaleFactor = 10;
        this.bottom = 0;
        this.side = 0;
        this.height = 0;
        this.firstCircle = [];
        this.secondCircle = [];
    }
    init() {
        for (let i = 0; i < 500; i++) {
            this.pen.fillRect(250, i, 1, 1);
            this.pen.fillRect(i, 250, 1, 1);
        }
    }
    printDot(x, y) {
        this.pen.fillRect(250 + x * this.scaleFactor, 250 - y * this.scaleFactor, 2, 2);
    }
    printLine(x1, y1, x2, y2) {
        let a = (x1 - x2) / (y1 - y2);
        let b = y1 - (a * x1);
        // for(let x=x1)
        // this.printDot()
    }
    drawCircle(x, y, r, switcher) {
        for (let i = 0; i < 360; i++) {
            let radian = (Math.PI * i) / 180;
            let sin = Number(Math.sin(radian) * r);
            let cos = Number(Math.cos(radian) * r);
            // console.log(sin+x, cos+y)
            this.printDot(cos + x, sin + y);
            let sinn = Number(sin.toFixed());
            let coss = Number(cos.toFixed());
            let tempArr = [Number(cos.toFixed()), Number(sin.toFixed())];
            switch (switcher) {
                case "1":
                    if (i < 90) {
                        if ((coss ** 2) + (sinn - this.bottom) ** 2 == (this.height) ** 2) {
                            console.log(sinn, coss);
                        }
                        else {
                            // console.log(coss, sinn);
                            // console.log("not match!")
                        }
                    }
                    break;
            }
        }
        // console.log(this.firstCircle);
    }
    getPoint() {
        this.firstCircle.forEach((v1, i) => {
            this.secondCircle.forEach((v2) => {
                // console.log(v1);
                if (v1[0] == v2[0] && v1[1] == v2[1]) {
                    console.log(v1[0], v2[0]);
                }
                else {
                    console.log("not match");
                }
            });
        });
    }
    event() {
        addEventListener('click', e => {
            var _a;
            switch ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) {
                case "drawBtn":
                    this.canvas = document.getElementById('canvas');
                    this.pen = this.canvas.getContext('2d');
                    this.init();
                    const $bottom = document.getElementById('bottom');
                    this.bottom = Number($bottom.value);
                    const $side = document.getElementById('side');
                    this.side = Number($side.value);
                    const $height = document.getElementById('height');
                    this.height = Number($height.value);
                    // console.log(this.bottom, this.side, this.height);
                    this.drawCircle(0, 0, this.side, "1");
                    this.drawCircle(this.bottom, 0, this.height, "2");
                    this.getPoint();
                    break;
            }
        });
    }
    running() {
        // this.init();
        this.event();
    }
}
const triangleWeight = new TriangleWeight('triangleWeight');
triangleWeight.running();
