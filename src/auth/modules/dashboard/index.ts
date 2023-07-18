import { NgModule } from '@angular/core';
import { dashboardRoutingModule } from './routes';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    dashboardRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class dashboardModule { }