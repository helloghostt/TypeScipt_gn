//function Generic

// function getLength<T>(arg: T): number {
//   if ((arg as any).hasOwnProperty("length")) {
//     return arg["length"];
//   }
//   return 0;
// }
// console.log(getLength<number>(22));   //0   number는 length가 없음
// console.log(getLength("Hello World."));     //12

interface HasLength {
  length: number;
}
function getLength<T extends HasLength>(arg: T): number {
  return arg.length;
}
console.log(getLength<number>(22));
console.log(getLength("Hello World."));
