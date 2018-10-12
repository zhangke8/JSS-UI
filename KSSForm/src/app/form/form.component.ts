import { Component, OnInit, Directive } from '@angular/core';

@Directive({
  selector: '[form]'
})

@Component({
  selector: 'form',
  styleUrls: ['./form.css'],
  templateUrl: './form.html'
})
export class Form {
  regions = ["AM", "CN", "EMEA", "JP + Asia"];
  plants = ["ACUNA", "AP", "ARITA", "HIKONE"];
  productTypes = ["AB", "AB/SB", "AB/INFLATOR", "AB/SB/SW"];
}


export class FormComponent implements OnInit { 
  ngOnInit() { } 
}
