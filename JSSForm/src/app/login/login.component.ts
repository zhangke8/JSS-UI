import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  searchValue = '';

  constructor(private router : Router) { }

  clear() {
    this.searchValue  = '';
  }

  public Username: string;
  public Password: string;
  login() {
    alert(this.Username); 
    console.log(this.Password);
    alert(this.Password);
    // setTimeout(() => {
    //   this.router.navigate(['/history']);
    // }, 2000);
  }

  
  ngOnInit() {
  }

}

