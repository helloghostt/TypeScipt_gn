const mappendEmp = new Map();
mappendEmp.set("Linda", {fullName: "Linda Johnson", id:1});
mappendEmp.set("Jim", {fullName: "Jim Thomson", id:2});
mappendEmp.set("Pam", { fullName: "Pam Dryer", id:4});

console.log(mappendEmp);
//Output
// Map(3) {
//     'Linda' => { fullName: 'Linda Johnson', id: 1 }, 
//     'Jim' => { fullName: 'Jim Thomson', id: 2 },     
//     'Pam' => { fullName: 'Pam Dryer', id: 4 }        
//   }
console.log('get', mappendEmp.get('Jim')); // get { fullName: 'Jim Thomson', id: 2 }
console.log('size', mappendEmp.size); //size 3

for(let [key, val] of mappendEmp){ //구조분해
    console.log("iterate", key, val);
// OutPut
// iterate Linda { fullName: 'Linda Johnson', id: 1 } 
// iterate Jim { fullName: 'Jim Thomson', id: 2 }     
// iterate Pam { fullName: 'Pam Dryer', id: 4 }
}