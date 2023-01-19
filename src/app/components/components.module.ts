import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { LoadingComponent } from './loading/loading.component';

// In this example, MyComponent would be imported as follows:
// import { MyComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [
    PickupCallCardComponent,
    ErrorMessageComponent,
    LoadingComponent,
    /*Declare your components here. e.g. MyComponent*/
  ],
  providers: [],
  imports: [
    CommonModule,
    IonicModule,
    // Add modules to import here. e.g. FormsModule
  ],
  exports: [
    PickupCallCardComponent,
    ErrorMessageComponent,
    LoadingComponent,
    /*Same as declarations*/
  ],
})
export class ComponentsModule {}
