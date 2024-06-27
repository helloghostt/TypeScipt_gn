class Vehicle {
  constructor(protected wheelCount: number) {} // update this하면서 (private wheelCount: number)를 protected를 써서 바꿈
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount}`);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(2); // Call the parent's constructor with the wheel count of 2
  }

  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount; // Update the wheel count  ##protected를 써서 부모자식 관계표시
  }
}
class Automobile extends Vehicle {
  constructor() {
    super(4); // Call the parent's constructor with the wheel count of 4
  }
}
const motorCycle = new Motorcycle(); // Output: moved 2
motorCycle.updateWheelCount(10); // Update the wheel count to 10
motorCycle.showNumberOfWheels();
const automobile = new Automobile(); // Output: moved 4
automobile.showNumberOfWheels();
