import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DocRecord } from '../../model/doc-record';
import { NgFor } from '@angular/common';
import { DocRecordService } from '../../service/doc-record.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-filter-results',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter-results.component.html',
  styleUrl: './filter-results.component.css'
})
export class FilterResultsComponent implements OnInit {

  documents: DocRecord[] = [];

  constructor(private docRecordService: DocRecordService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.docRecordService.documents.subscribe(data => {
      this.documents = data;
      console.log(data);
      this.cdr.detectChanges();
    });
  }
}
