//버퍼 cpu에 무리가 가지않도록 일정한 크기로 모아두는 데이터 - 버퍼링
//스트림도 비슷한데 버퍼를 작게 만들어서 주기적으로 데이터를 전달함 - 스트리밍

const buffer = Buffer.from("저를 버퍼로 바꿔보세요  ");
console.log("from():", buffer); //from(): <Buffer ec a0 80 eb a5 bc 20 eb b2 84 ed 8d bc eb a1 9c 20 eb b0 94 ea bf 94 eb b3 b4 ec 84 b8 ec 9a 94 20 20>
console.log("length:", buffer.length); //length: 34 버퍼의 크기
console.log("tostring():", buffer.toString()); //tostring(): 저를 버퍼로 바꿔보세요

const array = [
  Buffer.from("띄엄"),
  Buffer.from("띄엄"),
  Buffer.from("띄어쓰기"),
];
const buffer2 = Buffer.concat(array);
console.log("concat():", buffer2.toString()); //concat(): 띄엄띄엄띄어쓰기

const buffer3 = Buffer.alloc(5); // 5 byte alloc 바이트, 빈 버퍼를 생성함
console.log("alloc():", buffer3); //alloc(): <Buffer 00 00 00 00 00>
