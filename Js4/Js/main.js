var name = "Hector";
var index = 5;
do{
  var place = name.length-(index+1)
  console.log(name[place]);
  index--;
  console.log(index);
}
while (index>=0);
//invertir palabra
var name2 = "rotceH";
var finalName = String();
var index = name2.length - 1;
do{
  //console.log(name2[index]);
  finalName += name2[index];
  index--;
}
while(index>=0);
console.log(finalName);
//verificar si la palabra {word} tiene al menos 3 vocales
let word = "carnaval";
let vowels = 0;
for (let i=0;i<=word.length-1;i++){
  let letter = word.charAt(i);
  if (letter==="a"||letter==="e"||letter==="i"||letter==="o"||letter==="u"){
    vowels++;
  }
}
if(vowels>=3){
  console.log("Your word has 3 or more vowels! :D")
}else{
  console.error("Your word has less than 3 vowels! >:( ")
}
//cuántos múltiplos de 8 hay dentro del rango: {numberOne}-{numberTwo}?
//Se debe validar que numberOne sea menor que numberTwo
//verificar que ambos sean positivos
let numberOne = 0;
let numberTwo = 64;
let multiplesOfEight = 0;

if (numberTwo-numberOne>0){
  for (let i = numberOne; i<=numberTwo; i++){
    if(i%8===0&&i!==0){
      multiplesOfEight++;
    }
  }
  console.log("Your number range has "+multiplesOfEight+" multiples of eight!");
}
else{
  console.error("Your number range does not contain any multiples of eight")
}
