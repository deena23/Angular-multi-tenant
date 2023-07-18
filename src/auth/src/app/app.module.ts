import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { dashboardModule } from 'src/auth/modules/dashboard';
import { loginModule } from 'src/auth/modules/login';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    dashboardModule,
    loginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
