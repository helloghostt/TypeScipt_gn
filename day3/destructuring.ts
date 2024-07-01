function getEmloyee(id) {
    return {
        name: "John Doe",
        age: 35,
        address: "123 Main St",
        count: "United State"
        
    }
}

const{ name:fullName, age} = getEmloyee(22);
console.log("employee", fullName, age); //Output employee John Doe 35

function getEmloyeeWorkInfo(id){
    return[
        id,
        "Office st",
        "France"];
}
const[id, officeAddress] =getEmloyeeWorkInfo(33);
console.log("employee", id, officeAddress);