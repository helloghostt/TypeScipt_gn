// let literal: "tom" | "linda" | "jeff" | "sue" = "linda"; //하드코딩: 값을 직접 선언
let literal: "tom" | "linda" | "jeff" | "sue";
literal = "sue";
literal = "tom";
// literal = "jeff"; // Error: Type is not assignable

console.log(literal); // Output: sue
