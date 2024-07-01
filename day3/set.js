const userIds = [1,2,1,3]
const uniqueIds = new Set(userIds);
console.log(uniqueIds); //Output  Set(3) { 1, 2, 3 }

uniqueIds.add(10);
console.log("add 10", uniqueIds); //add 10 Set(4) { 1, 2, 3, 10 }

console.log("has", uniqueIds.has(3)); //has true
console.log("size", uniqueIds.size); //size 4

for (let item of uniqueIds) {
    console.log("iterate",item);
}
// Output
// iterate 1
// iterate 2
// iterate 3
// iterate 10

for (let item of uniqueIds) {
    console.log("array iterate",item);
}
//Output
// array iterate 1
// array iterate 2
// array iterate 3
// array iterate 10


//set은 사용자가 어떤 로그기록을 갖는지 할때 이용