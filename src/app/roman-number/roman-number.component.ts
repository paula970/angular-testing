import { RomanNumberService } from '../service/roman-number.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roman-number',
  templateUrl: './roman-number.component.html',
  styleUrls: ['./roman-number.component.css']
})
export class RomanNumberComponent implements OnInit {
  numero: any = {}

  constructor(private romanNumberService: RomanNumberService) { }

  ngOnInit(): void {
  }
  Transform() {
    if (parseInt(this.numero.arabigo)) {
      this.numero.romano = this.romanNumberService.romanNumber(parseInt(this.numero.arabigo))
    } else {
      this.numero.romano = ""
    }
  }

}
