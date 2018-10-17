import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  regions = [];
  plants = [];
  productTypes = [];

  constructor() {
    this.regions = ["AM", "CN", "EMEA", "JP + Asia"];
    this.plants = ["ACUNA", "AP", "ARITA", "HIKONE"];
    this.productTypes = ["AB", "AB/SB", "AB/INFLATOR", "AB/SB/SW"];
  }

  ngOnInit() {
  }

}
