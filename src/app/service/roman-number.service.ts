import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumberService {

  constructor() { }
  number1(): string { return 'I' }
  number5(): string { return 'V' }
  number10(): string { return 'X' }
  number50(): string { return 'L' }
  number100(): string { return 'C' }
  number500(): string { return 'D' }
  number1000(): string { return 'M' }

  romanNumber(number: number): string {
    var valor = "";
    if (number > 1000 || number <= 0) {
      alert("Introduzca un número entre 1 y 1000");
    } else {
      var romano = [
        "I",
        "IV",
        "V",
        "IX",
        "X",
        "XL",
        "L",
        "XC",
        "C",
        "CD",
        "D",
        "CM",
        "M",
      ];
      var arabigo = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
      var i = 12;
      while (number > 0) {
        if (arabigo[i] <= number) {
          valor = `${valor}${romano[i]}`;
          number = number - arabigo[i];
        } else {
          i--;
        }
      }
    }
    return valor
  }
}
