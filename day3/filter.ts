const filterItems = [
    {name: "John", age: 20},
    {name: "Linda", age: 22},
    {name: "Mike", age: 25},
    
];

const results = filterItems.filter((item, index) =>{
    // console.log(index); 있어도 되고 없어도 되는데 현업에서 씀
    return item.name === "John";

});
console.log(results);

//Output
// 0
// 1
// 2
// [ { name: 'John', age: 20 } ]