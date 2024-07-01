const items=[
    {name:"John", age:20},
    {name:"Linda", age:22},
    {name:"Mike", age:18},
    {name:"Jane", age:25}

];
const John = items.find((item)=> {
    return item.name === "John";
})

console.log(John); // Output: { name: 'John', age: 20 }