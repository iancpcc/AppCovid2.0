import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datecustom'
})
export class DatecustomPipe implements PipeTransform {

    constructor(private datePipe: DatePipe) { }
  transform(value: string, format: string = 'dd-MM-yyyy') {
    let date = new Date(parseInt(value.substr(6)));
    return this.datePipe.transform(date, format);
  }

}
