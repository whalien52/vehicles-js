class Vehicle{
  constructor(make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
  }
  honk() {
    return "Beep.";
  }
  toString() {
    return "The vehicle is a " + this.make + " " + this.model + " from " + this.year
  }
}


class Motorcycle extends Vehicle{
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOM!!!";
  }
}


class Garage{
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    } else {
      if (this.vehicles.length >= this.capacity) {
        return "Sorry! We're full.";
      } else {
        this.vehicles.push(vehicle);
        return "Vehicle added!";
      }
    }
  }
}
