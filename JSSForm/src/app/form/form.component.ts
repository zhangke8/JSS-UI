import { Component, OnInit } from '@angular/core';
import { CommonModule }  from '@angular/common';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  productTypes = [];

  constructor() {
    this.productTypes = ["AB", "AB/SB", "AB/INFLATOR", "AB/SB/SW"];
  }

  public show1: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;

  objDate = Date.now();

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

}
