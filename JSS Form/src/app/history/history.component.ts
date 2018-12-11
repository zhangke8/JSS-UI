import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoricalComponent implements OnInit {
  months = [];

  constructor() {
    this.months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }
  add() {
 
  }
  edit(){
 
  }

  onSubmit() {
    
  }

  ngOnInit() {
 
  }

}
