class TriangleWeight {
    id: string;
    canvas: any;
    pen: any;
    scaleFactor: number;
    bottom: number;
    side: number;
    height: number;
    firstCircle: any;
    secondCircle: any;
    constructor(id: string) {
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
    printDot(x: number, y: number) {
        this.pen.fillRect(250 + x * this.scaleFactor, 250 - y * this.scaleFactor, 2, 2);
    }
    printLine(x1: number, y1: number, x2: number, y2: number) {
        let a = (x1 - x2) / (y1 - y2);
        let b = y1 - (a * x1);
        // for(let x=x1)
        // this.printDot()
    }
    drawCircle(x: number, y: number, r: number, switcher: string) {
        for (let i = 0; i < 360; i++) {
            let radian: number = (Math.PI * i) / 180;
            let sin: number = Number(Math.sin(radian) * r);
            let cos: number = Number(Math.cos(radian) * r);
            // console.log(sin+x, cos+y)
            this.printDot(cos + x, sin + y);

            let sinn: number = Number(sin.toFixed());
            let coss: number = Number(cos.toFixed());


            let tempArr: number[] = [Number(cos.toFixed()), Number(sin.toFixed())];
            switch (switcher) {
                case "1":
                    if (i < 90) {
                        if ((coss ** 2) + (sinn - this.bottom) ** 2 == (this.height) ** 2) {
                            console.log(sinn, coss);
                        } else {
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
        this.firstCircle.forEach((v1: any, i: any) => {
            this.secondCircle.forEach((v2: any) => {
                // console.log(v1);
                if (v1[0] == v2[0] && v1[1] == v2[1]) {
                    console.log(v1[0], v2[0])
                } else {
                    console.log("not match")
                }
            })

        })

    }
    event() {
        addEventListener('click', e => {
            switch (e.target?.id) {
                case "drawBtn":
                    this.canvas = document.getElementById('canvas');
                    this.pen = this.canvas.getContext('2d');
                    this.init();
                    const $bottom = document.getElementById('bottom') as HTMLInputElement;
                    this.bottom = Number($bottom.value);
                    const $side = document.getElementById('side') as HTMLInputElement;
                    this.side = Number($side.value);
                    const $height = document.getElementById('height') as HTMLInputElement;
                    this.height = Number($height.value);
                    // console.log(this.bottom, this.side, this.height);
                    this.drawCircle(0, 0, this.side, "1");
                    this.drawCircle(this.bottom, 0, this.height, "2")
                    this.getPoint();
                    break;
            }
        })
    }
    running() {
        // this.init();
        this.event();
    }
}

const triangleWeight: TriangleWeight = new TriangleWeight('triangleWeight');
triangleWeight.running();