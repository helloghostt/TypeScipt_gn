namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}

    abstract updateWheelCount(newWheelCount: number): void;

    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount} miles`);
    }
  }

  class Motorcycle extends Vehicle {
    constructor() {
      super(2);
    }
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`Motorcycle has ${this.wheelCount}`);
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }
    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`); //Motorcycle has 1
    }
    showNumberOfWheels() {
      console.log(`moved Automobile ${this.wheelCount} miles`); //moved 1 miles
    }
  }
  const motorCycle = new Motorcycle(); //Automobile has 5
  motorCycle.updateWheelCount(1);
  motorCycle.showNumberOfWheels();
  const automobile = new Automobile(); //moved Automobile 5 miles
  automobile.updateWheelCount(5);
  automobile.showNumberOfWheels();
}
