var cars = [];
function carPassing(car, speed){
  car = {
    time: Date.now(),
    speed: speed
  }
  cars.push(car);
  return cars;

}
console.log(carPassing('honda', 22));
console.log(carPassing('mercedes', 150));