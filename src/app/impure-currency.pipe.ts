import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'impureCurrency',
    pure:false,
    standalone: true
})

export class ImpureCurrencyPipe implements PipeTransform{
    transform(value:number, currency:string='Rs', digits:number=2):string {
       console.log('ImpPureCurrencyPipe called:', value, currency);
        if(value==null)
            return '';
        return `${currency}${value.toFixed(digits)}`;
    }

}


