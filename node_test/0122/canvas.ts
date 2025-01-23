class MemoryInfo {

    protected id: string;
    protected canvas: HTMLCanvasElement | null;
    protected pen: CanvasRenderingContext2D | null;

    constructor(id: string) {
        this.id = id;
        this.canvas = null;
        this.pen = null;
    }
    settings(): void {
        this.canvas = this.$("canvas") as HTMLCanvasElement;
        this.pen = this.canvas.getContext("2d");
    }
    $(elementName: string): HTMLElement | null {
        return <HTMLElement>document.querySelector(elementName);
    }
    run(): void {
        this.settings();
    }
}

const mainFunc = ((): void => {
    const memoryInfo: MemoryInfo = new MemoryInfo("memoryInfo");
    memoryInfo.run()
})();
