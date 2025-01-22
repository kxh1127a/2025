class Palindrome {
    id:string;
    value:string;

    constructor(id: string) {
        this.id = id;
        this.value = '';
    }
    checking() {
        let reverseString:string = '';
        const $output = document.getElementById('outputArea') as HTMLElement;
        for(let i=0; i<this.value.length; i++) {
            reverseString = this.value[i] + reverseString;
        }
        if(reverseString==this.value) {
           $output.innerHTML= '⭕Palindrome' 
        } else {
           $output.innerHTML =  '❌Not Palindrome' 
        }
    }
    iterator() {
        const iterator = this.value[Symbol.iterator]();
        let iteratorElement = iterator.next();
        // console.log(iteratorElement);
        //{value: '1', done: false}
        let reverseString:string = ''; 
        const $output = document.getElementById('outputArea') as HTMLElement;

        while(!iteratorElement.done) {
            reverseString = iteratorElement.value + reverseString;
            iteratorElement = iterator.next();
        }

        if(reverseString==this.value) {
            $output.innerHTML= '⭕Palindrome' 
         } else {
            $output.innerHTML =  '❌Not Palindrome' 
         }
    }
    event() {
        addEventListener('click', e=>{
            switch(e.target?.id) {
                case "btn":
                    const $input = document.getElementById('inputValue') as HTMLInputElement;
                    this.value = $input.value;
                    // this.checking();
                    this.iterator();
                    break;
            }
        })
    }
    running() {
        this.event();
    }
}

const palindrome:Palindrome = new Palindrome('palindrome');
palindrome.running();