import { Component, OnInit } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Dates } from './dates';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  productTypes = [];

  months = [];

  persons = [];

  dropdownValue: string = '';

  selectedLevel;

  selectedMonth;

  constructor() {
    this.productTypes = ["AB", "AB/SB", "AB/INFLATOR", "AB/SB/SW"];
    this.months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    this.persons = [ "Select a Value", "Customer", "Supplier" ];
  }

  public show1: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;

  public fields: boolean = false;

  objDate = Date.now();

  dates = new Dates('');

  toggle1() {
    this.show1 = !this.show1;
  }

  toggle2() {
    this.show2 = !this.show2;
  }

  toggle3() {
    this.show3 = !this.show3;
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
