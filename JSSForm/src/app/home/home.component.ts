import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchValue = '';

  constructor(private router : Router) { }

  clear() {
    this.searchValue  = '';
  }


  
  ngOnInit() {
  }

}

