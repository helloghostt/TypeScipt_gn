function oldEnough(age: number): never | boolean {
  if (age > 59) {
    throw Error("Too old!");
  }
  if (age <= 18) {
    return false;
  }

  if (age > 59) {
    return true;
  } else if (age <= 18) {
    return false;
  }
  return true;
}
