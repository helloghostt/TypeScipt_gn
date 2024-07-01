function getEmloyee(id) {
    return {
        name: "John Doe",
        age: 35,
        department: "IT",
        salary: 50000
    };
}
var _a = getEmloyee(22), fullName = _a.name, age = _a.age;
console.log("employee", fullName, age);
