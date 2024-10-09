import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FilterSelectComponent } from '../filter-select/filter-select.component';
import { FilterResultsComponent } from '../filter-results/filter-results.component';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, FilterSelectComponent, FilterResultsComponent, SummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
