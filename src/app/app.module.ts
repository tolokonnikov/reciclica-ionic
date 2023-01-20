import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppStoreModule } from 'src/store/AppStoreModule';
<<<<<<< HEAD
import { StoreDevtools } from '@ngrx/store-devtools';
import { StoreDevtoolsModule } from '@ngrx/store-devtools/src';
import { ComponentsModule } from "./components/components.module";
=======
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
>>>>>>> 55de50a71454c7707daed44d77aad0700d559133

@NgModule({
    declarations: [AppComponent],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule.forRoot(),
        ...AppStoreModule,
        StoreDevtoolsModule.instrument({ maxAge: 25 }),
        ComponentsModule
    ]
})
export class AppModule {}
