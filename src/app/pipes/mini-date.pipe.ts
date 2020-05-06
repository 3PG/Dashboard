import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miniDate'
})
export class MiniDatePipe implements PipeTransform {
  transform(dateString: string, ...args: unknown[]): unknown {
    const date = new Date(dateString);
    return this.ddMM(date);    
  }
  
  private ddMM(date: Date) {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;   
  }
}
