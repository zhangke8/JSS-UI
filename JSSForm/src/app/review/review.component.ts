import { Component, OnInit } from '@angular/core';
import { CommonModule }  from '@angular/common';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  objDate = Date.now();

  public show: boolean = false;

  constructor() {
  }
  ngOnInit() {
  }

  onSubmit() {


  }



}
