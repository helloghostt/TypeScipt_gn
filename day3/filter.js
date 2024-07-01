var filterItems = [
    { name: "John", age: 20 },
    { name: "Linda", age: 22 },
    { name: "Mike", age: 25 },
];
var results = filterItems.filter(function (item, index) {
    console.log(index);
    return item.name === "John";
});
console.log(results);
