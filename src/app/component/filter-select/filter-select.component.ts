import { ChangeDetectionStrategy, ChangeDetectorRef, Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FilterParam } from '../../model/filter-param';
import { DocRecordService } from '../../service/doc-record.service';

interface Year {
  value: string;
  viewValue: string;
}
interface Company {
  value: string;
  viewValue: string;
}
interface DocNb {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter-select',
  standalone: true,
  imports: [FormsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatCheckboxModule],
  templateUrl: './filter-select.component.html',
  styleUrl: './filter-select.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterSelectComponent {

  years: Year[] = [];
  companyNumbers: Company[] = [{value: "1029", viewValue: "1029"}, {value: "2983", viewValue: "2983"}];
  docNumbers: DocNb[] = [
    {value: "2000000000", viewValue: "2000000000"},
    {value: "3000000000", viewValue: "3000000000"},
    {value: "4000000000", viewValue: "4000000000"}];
  param: FilterParam = new FilterParam();
  
  constructor(private docRecordService: DocRecordService, private cdr: ChangeDetectorRef) {
    for (let i = 2024; i > 1999; i--) {
      this.years.push({value: i.toString(), viewValue: i.toString()});
    }
    this.param.year = this.years[0].viewValue;
    this.param.company = this.companyNumbers[0].viewValue;
    this.param.docNbMin = this.docNumbers[0].viewValue;
    this.param.docNbMax = this.docNumbers[this.docNumbers.length - 1].viewValue;
  }

  ngOnInit(): void {
    this.onParamChanged();
  }

  onParamChanged(): void {
    console.log(this.param);
    this.docRecordService.updateFilterParam(this.param);
  }

}
