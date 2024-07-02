// 함수 반환타입에 대해 알아보자

function func1(obj) {
  console.log("Hi");
  console.log(obj);
} //일반적인 명시


// 함수 반환타입은 이렇게
// function runMore1(distance: number): number;
// function (parameter,arguments...): return type
function runMore1(distance: number): number {
  return distance + 10;
}
console.log(runMore1(20));


//Javascript 문법으로 바꿔보자 
function runMore2(distance) {
  return distance + 10;
}
console.log(runMore2(20));

//javascript입력은 name, age를 받고 출력은 내이름은 누구고 나이는 30살이야
//라고 만들어보자
function printPersonal1(name, age) {
  return "내이름은 "+ name +"고, 나이는" + age+ "살이야";
}

//typescript로 만들어보자 자바스크립트에서 불명확하게 받았던 name과 age를 타입을 선언해서 받는것이 typescript이다
function printPersonal2(name: string, age: number): string {
  return `내이름은 ${name}고, 나이는 ${age}살이야`;
}

