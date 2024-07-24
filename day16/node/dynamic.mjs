const a = true;
if (a) {
    const m1 = await import('./func.mjs');
    console.log(m1);
    const m2 = await import('./var.mjs');
    console.log(m2);
}
// Output
// [Module: null prototype] { default: [Function: checkOddOrEven] }
// [Module: null prototype] { even: '짝수입니다', odd: '홀수입니다' }
const m3 = require('.func.mjs');
console.log(m3); // await안걸어서 안됨
const m4 = require('./var.mjs');
console.log(m4); // await안걸어서 안됨