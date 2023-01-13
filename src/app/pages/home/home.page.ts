import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  createPickupCall() {
    this.router.navigate(['pickup-call']);
  }
  goToPickupCalls() {
    this.router.navigate(['pickup-calls']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
