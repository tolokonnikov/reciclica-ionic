import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    IonicModule,
    ComponentsModule,
  ],
})
export class HomePageModule {}
