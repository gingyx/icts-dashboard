import { format } from "date-fns";

export class DocRecord {
  bedrijfsNr: string;
  boekjaar: string;
  docNr: string;
  docSoort: string;
  docDatum: Date;
  boekRegel: string;
  boekSleutel: string;
  verefDatum: Date;

  constructor(bedrijfsNr: string, boekjaar: string, docNr: string, docSoort: string, docDatum: Date, boekRegel: string, boekSleutel: string, verefDatum: Date) {
    this.bedrijfsNr = bedrijfsNr;
    this.boekjaar = boekjaar;
    this.docNr = docNr;
    this.docSoort = docSoort;
    this.docDatum = docDatum;
    this.boekRegel = boekRegel;
    this.boekSleutel = boekSleutel;
    this.verefDatum = verefDatum;
  }

  getDocDatum() {
    return (this.docDatum.getSeconds() == 0 ? "" : format(this.docDatum, 'dd/MM/yyyy'));
  }

  getVerefDatum() {
    return (this.verefDatum.getSeconds()  == 0 ? "" : format(this.verefDatum, 'dd/MM/yyyy'));
  }
}
