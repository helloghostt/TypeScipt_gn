import {odd, even} from "./var.mjs";
import checkNumber from './func.mjs';

function checkStringOddOrEven(str){
    if (str.length %2) {
        return odd;
    }
    return even;
}
// 1 is true

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));