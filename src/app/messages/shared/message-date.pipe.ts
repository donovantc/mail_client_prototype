import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'messageDate'
})
export class MessageDatePipe implements PipeTransform {
  /**
   * This function transforms a unix timestamp into the following date format: Mon 06 July, 10:53
   */
  transform(value: number): string {
    let date = moment.unix(value);
    return date.format('ddd DD MMMM, HH:mm');
  }

}
