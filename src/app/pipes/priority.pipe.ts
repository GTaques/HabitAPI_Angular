import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'priorityPipe'})
export class PriorityPipe implements PipeTransform {
  transform(value: number): string {
      switch (value) {
          case 1:
              return "Very Low"
          case 2:
              return "Low"
          case 3:
              return "Medium"
          case 4:
              return "High"
          case 5: 
              return "Very High"
          default:
            return "Undefined"
      }
  }
}