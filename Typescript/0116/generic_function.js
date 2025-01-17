"use strict";
function reverse(items) {
    return items.reverse();
}
const arg = [1, 2, 3, 4, 5];
const reversed = reverse(arg);
console.log(reversed);
const argStr = [{ name: 'LEE' }, { name: 'KIM' }];
const reversedStr = reverse(argStr);
console.log(reversedStr);
