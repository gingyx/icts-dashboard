import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable, of} from "rxjs";
import { DocRecord } from '../model/doc-record';
import { FilterParam } from '../model/filter-param';

interface DBDoc {
  BUKRS: string,
  BELNR: string,
  GJAHR: string,
  BLART: string,
  BLDAT: string,
  BUDAT: string,
  MONAT: string,
  CPUDT: string,
  CPUTM: string,

  BUZEI: string,
  BSCHL: string,
  AUGDT: string,
}

@Injectable({
  providedIn: 'root'
})
export class DocRecordService {

  private defaultDocRecords: DocRecord[] = [];
    //new DocRecord("111", "11", "1111", "1111111", new Date(), "11", "111", new Date())];
  
  private docSubject = new BehaviorSubject<DocRecord[]>([]);
  documents = this.docSubject.asObservable();
  
  constructor(private http: HttpClient) {
  }

  async updateFilterParam(param: FilterParam) {
    this.docSubject.next(await this.getDocRecords(param));
  }

  async getDocRecords(param: FilterParam): Promise<DocRecord[]> {
    if (param == null) {
      return [];
    }
    const response = await fetch(
      `http://localhost:3000/api/doc-records/${param.showDetails}/${param.year}/${param.company}/${param.docNbMin}/${param.docNbMax}`);
    const data: DBDoc[] = await response.json() as DBDoc[];
    if (!response.ok) {
      console.log(response.status)
      return this.defaultDocRecords;
    }
    return data.map((obj) => new DocRecord(
      obj.BUKRS, obj.GJAHR, obj.BELNR, obj.BLART, obj.BLDAT ? new Date() : new Date(0), obj.BUZEI, obj.BSCHL, obj.AUGDT ? new Date() : new Date(0)));
  }

}
