//dado tu nombre, apellido, género, fecha de nacimiento y lugar de nacimiento, dar tu curp
var firstName = "Jorge";
var firstSurname = "Ochoa";
var secondSurname = "Balvanera"
var birthDate = "22-05-1991";
var gender = "H";
var birthPlace = "DF";
var abbreviatedYear = birthDate.slice(8,10);
var abbreviatedMonth = birthDate.slice(3,5);
var abbreviatedDay = birthDate.slice(0,2);
var abbreviatedBirthdate = abbreviatedYear+abbreviatedMonth+abbreviatedDay;

console.log(firstSurname.charAt(0)+firstSurname.charAt(0)+
            secondSurname.charAt(0)+firstName.charAt(0)+
            abbreviatedBirthdate+gender+birthPlace);
//imprimir el cuadrado de cada número del 1 al 8
var numbers = [];
for (i=1; i<9; i++){
  numbers[i] = i*i;
  console.log(numbers[i]);
}
