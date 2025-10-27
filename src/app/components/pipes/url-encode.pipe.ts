import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlEncode',
  standalone: true
})
export class UrlEncodePipe implements PipeTransform {
  transform(value: string): string {
    // Encodes the string for use in a URL query parameter
    return encodeURIComponent(value);
  }
}
