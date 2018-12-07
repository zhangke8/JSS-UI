import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  objDate = Date.now();

  closeResult: string;

  public show: boolean = false;

  constructor( private modalService: NgbModal, private router: Router ) {
  }
  ngOnInit() {
  }

  onSubmit(){
    alert("Thanks for submitting!");
    setTimeout(() => {
      this.router.navigate(['/history']);
    }, 2000);  
  }
}
