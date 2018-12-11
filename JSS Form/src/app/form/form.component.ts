import { Component, OnInit } from '@angular/core';
import { Dates } from './dates';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  public fields: boolean = false;

  objDate = Date.now();
  dates = new Dates('');

  productTypes = [];

  months = [];

  persons = [];

  dropdownValue: string = '';

  selectedLevel;

  selectedMonth;

  constructor() {
    this.productTypes = ["AB", "AB/SB", "AB/INFLATOR", "AB/SB/SW"];
    this.months = [ " ", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    this.persons = [ " ", "Customer", "Supplier" ];
  }

  public show1: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;

  toggle(element) {
    this[element] = !this[element];
  }

  ngOnInit() {
  }

  onSubmit() {
    
  }

  selectedDay: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
    //this.fields = !this.fields;
  }

}
