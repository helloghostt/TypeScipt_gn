type Run = (miles: number) => boolean;

let runner: Run = function (miles: number): boolean {
  //Run은 function이고 (miles: number)는 위 type의 내용과 일치해야함
  if (miles > 10) {
    return true;
  }
  return false;
};

// Old code for reference
//  if (miles > 10) {
//   return true;
//  } else {
//   return false
//  }

console.log(runner(9)); // Output: false
