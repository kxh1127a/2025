"use strict";
class Palindrome {
    constructor(id) {
        this.id = id;
        this.value = '';
    }
    checking() {
        let reverseString = '';
        const $output = document.getElementById('outputArea');
        for (let i = 0; i < this.value.length; i++) {
            reverseString = this.value[i] + reverseString;
        }
        if (reverseString == this.value) {
            $output.innerHTML = '⭕Palindrome';
        }
        else {
            $output.innerHTML = '❌Not Palindrome';
        }
    }
    iterator() {
        const iterator = this.value[Symbol.iterator]();
        let iteratorElement = iterator.next();
        // console.log(iteratorElement);
        //{value: '1', done: false}
        let reverseString = '';
        const $output = document.getElementById('outputArea');
        while (!iteratorElement.done) {
            reverseString = iteratorElement.value + reverseString;
            iteratorElement = iterator.next();
        }
        if (reverseString == this.value) {
            $output.innerHTML = '⭕Palindrome';
        }
        else {
            $output.innerHTML = '❌Not Palindrome';
        }
    }
    event() {
        addEventListener('click', e => {
            var _a;
            switch ((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) {
                case "btn":
                    const $input = document.getElementById('inputValue');
                    this.value = $input.value;
                    // this.checking();
                    this.iterator();
                    break;
            }
        });
    }
    running() {
        this.event();
    }
}
const palindrome = new Palindrome('palindrome');
palindrome.running();
