import {Component} from '@angular/core';


@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {
  regions = ["AM", "CN", "EMEA", "JP + Asia"];
  plants = ["ACUNA", "AP", "ARITA", "HIKONE"];
  productTypes = ["AB", "AB/SB", "AB/INFLATOR", "AB/SB/SW"];
}
