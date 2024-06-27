let val: unknown = 22;
val = "Hello World!";
val = new Array();

console.log(val instanceof Array);

if (val instanceof Array) {
  val.push(33);
}

console.log(val);
