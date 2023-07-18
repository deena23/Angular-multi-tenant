import { NgModule } from '@angular/core';
import { loginRoutingModule } from './routes';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    loginRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class loginModule { }