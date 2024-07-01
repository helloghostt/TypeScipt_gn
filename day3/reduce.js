const allTrucks =[2, 5, 7, 10];

const initialCapacity = 0;
const allTonnage = allTrack.reduce((totalCapacity,    currentCapacity) => {
    totalCapacity += currentCapacity;
    return totalCapacity;

}, initialCapacity);

console.log(allTonnage);

// Output
// currentCapacity:7
// totalCapacity14
// currentCapacity:10
// 24