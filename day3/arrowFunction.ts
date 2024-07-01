const myfunc = (message:string, title:string, age:number):boolean => {
    console.log(message);
    console.log(title);
    console.log(age);
    return true;
};
myfunc("Hello world", "myFirstArrowFunc", 30);


//표현하는 여러가지 방법인데 각각 알아둘것
// console.log("func"));
const func = () => console.log('func');
const func1 = () => ({name: 'dave'});
const func2 = () => {
    const val=20;
    return val;
};

console.log(func()); //func undefined 
console.log(func1()); // {name: 'dave'}
console.log(func2()); //output 20
