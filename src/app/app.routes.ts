import {Routes} from "@angular/router";
import {DashboardComponent} from "./component/dashboard/dashboard.component";

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: "/dashboard"}
];