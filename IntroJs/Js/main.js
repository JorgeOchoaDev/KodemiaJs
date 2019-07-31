var megabytesIngigabyte = 1024;
var imgSize = 3;
console.log("Hello World");
console.log(28*12*30);
//usb de 4gb, cuantas fotos de 3mb le caben?
console.log((4*megabytesIngigabyte)/imgSize);
/*Hay un estacionamiento con 22 cubículos
  a cada cubículo le caben 3 carros y 2 camionetas.
  cuántos cubículos llenamos completos?
  cuántas camionetas sobran?
  cuántos carros sobran?
  camionetas-57
  carros-130*/
var cubicles = 22;
var cars = 130;
var suvs = 57;
var remainingCars = (3*cubicles-cars)*-1;
var remainingSuvs = (2*cubicles-suvs)*-1;
console.log(cars>cubicles*3&&suvs>cubicles*2);
console.log(remainingCars);
console.log(remainingSuvs);
