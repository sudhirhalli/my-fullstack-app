import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureCurrency',
  standalone: true, // 👈 required
  pure: true        // 👈 optional, because pure is true by default
})
export class PureCurrencyPipe implements PipeTransform {
  transform(value: number, currencySymbol: string = '$', digits: number = 2): string {
    console.log('PureCurrencyPipe called:', value, currencySymbol);
    if (value == null) return '';
    return `${currencySymbol}${value.toFixed(digits)}`;
  }
}
