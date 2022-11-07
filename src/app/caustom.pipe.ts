import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caustom'
})
export class CaustomPipe implements PipeTransform {
cutomexample:string=''
  transform(value: string, ...args: unknown[]): unknown {
    this.cutomexample = value.trim()
    return this.cutomexample;
  }

}
