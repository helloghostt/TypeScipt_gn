function eat(calories: number) {
  console.log("I ate " + calories + " calories."); //I ate 100 calories.
}

function sleepIn(hours: number): void {
  console.log("I slept for " + hours + " hours."); //I slept for 10 hours.
}

let ate = eat(100);
console.log(ate); //ate -> void (return값이 없어서) =>console찍으면 undefined
let slept = sleepIn(10);
console.log(slept); //undefined
