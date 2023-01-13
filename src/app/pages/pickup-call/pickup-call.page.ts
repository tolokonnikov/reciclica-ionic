import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pickup-call',
  templateUrl: './pickup-call.page.html',
  styleUrls: ['./pickup-call.page.scss'],
})
export class PickupCallPage implements OnInit {
  
  onCreatePickupCall() {
    this.router.navigate(['home']);
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
