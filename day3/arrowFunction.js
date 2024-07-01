var myFunc = function (message, title, age) {
    console.log(message);
    console.log(title);
    console.log(age);
    return true;
};
myFunc("Hello world", "myFirstArrowFunction", 30);
//표현하는 여러가지 방법인데 각각 알아둘것
// console.log("func"));
var func = function () { return console.log('func'); };
var func1 = function () { return ({ name: 'dave' }); };
var func2 = function () {
    var val = 20;
    return val;
};
console.log(func()); //func undefined 
console.log(func1()); // {name: 'dave'}
console.log(func2()); //output 20
