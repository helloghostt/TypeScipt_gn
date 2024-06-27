// class ClassA {
//   static typeName: string;

//   constructor() {}

//   static getFullName() {
//     return "ClassA" + ClassA.typeName;
//   }
// }
// const a = new ClassA();
// // console.log(a.typeName); // error
// console.log(ClassA.typeName); // Output: undefined
// console.log(ClassA.getFullName()); // Output: ClassAundefined

class Runner {
  static lastRunTypeName: string;

  constructor(private typename: string) {}
  run() {
    Runner.lastRunTypeName = this.typename;
  }
}
const a = new Runner("a");
const b = new Runner("b");
a.run();
b.run();
console.log(Runner.lastRunTypeName); // Output: b
