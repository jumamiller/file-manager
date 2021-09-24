import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'officialOffice'
})
export class OfficialOfficePipe implements PipeTransform {

  transform(value: string): any {
    if(value=='2'){
      return 'Commissioner';
    }
    else if(value=='3'){
      return "Special Advisor"
    }
    else{

    }
  }
}
