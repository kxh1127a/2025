class KarnaughMap {
    public id: string;
    public arr: boolean[][];
    
    constructor(id: string) {
        this.id = id;
        this.arr = [
            [ false, false ],
            [ false, false ]
        ];
    }

    event(): void {
        addEventListener('click', e=>{
            const target = e.target as HTMLElement;
            const className:string = target.classList[0];
            // console.log(className)
            const column:number = Number(className.split('_')[1]);
            const low:number = Number(className.split('_')[2]);
            // console.log(`column:${typeof column}, low:${low}`)
            
            if(target.tagName === "DIV") {
                if(target.classList.contains("checked")) {
                    target.classList.remove("checked");
                    this.arr[column][low] = false;

                } else {
                    target.classList.add("checked")
                    this.arr[column][low] = true;
                }
            }
            console.log(this.arr)
        })
    }
    running(): void {
        this.event();
    }   
}

const main = (()=> {
    const karnaughMap: KarnaughMap = new KarnaughMap('karnaughMap');
    karnaughMap.running();
})();