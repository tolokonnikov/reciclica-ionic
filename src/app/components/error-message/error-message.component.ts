import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() message: string;
  @Input() field: FormControl;

  constructor() {}

  ngOnInit() {}

  shouldShowComponent() {
    //*ngIf="form.get('email').touched && form.get('email').errors?.['required']"

    if (this.field.touched && this.field.errors?.['required']) {
      return true;
    }
    return false;
  }
}
