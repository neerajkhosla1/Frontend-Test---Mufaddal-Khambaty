import { Pipe, PipeTransform } from '@angular/core';
import { BookData } from './models/BookData';

@Pipe({
  name: 'searchname'
})
export class SearchnamePipe implements PipeTransform {

  transform(Data: BookData[], searchTerm: string): BookData[] {
    if (!Data || !searchTerm) {
      return Data;
    }

    return Data
      ? Data.filter(element => element.name && element.name.toLowerCase().includes(searchTerm.toString().toLowerCase()))
      : Data;
  }

}
