import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  makeNavbarResponsive() {
    var x = document.getElementById("navMenu");
    if (x.className === "nav-menu") {
      x.className += " responsive";
    } else {
      x.className = "nav-menu";
    }
  }

  goToComponente(): void {
    this.router.navigate(['/pc-components']);
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }

}
