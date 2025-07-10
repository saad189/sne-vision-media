import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'date-pipe-custom',
    standalone: true
})
export class DatePipeCustom implements PipeTransform {
    transform(value: string | Date) {
        return new DatePipe('en-US').transform(value, 'dd-MM-yyyy') || value;
    }

    transformToNameDate(value: string | Date): string {
        return new DatePipe('en-US').transform(value, 'MMM dd, yyyy') || value.toString();
    }
}