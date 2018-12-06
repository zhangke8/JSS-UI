import { Component, OnInit } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  objDate = Date.now();

  closeResult: string;

  public show: boolean = false;

  constructor( private modalService: NgbModal ) {
  }
  ngOnInit() {
  }

  onSubmit() {


  }








}
